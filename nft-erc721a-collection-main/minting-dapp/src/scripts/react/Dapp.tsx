import React from 'react';
import { ethers, BigNumber,providers,utils } from 'ethers'
import { ExternalProvider, Web3Provider } from '@ethersproject/providers';
import detectEthereumProvider from '@metamask/detect-provider';
import NftContractType from '../lib/NftContractType';
import CollectionConfig from '../../../../smart-contract/config/CollectionConfig';
import CollectionStatus from './CollectionStatus';
import MintWidget from './MintWidget';
import Whitelist from '../lib/Whitelist';
import Web3Modal from "web3modal";
import Web3walletConnector from '@mindsorg/web3modal-ts';
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import MContainer from "./components/MContainer";
import CarouselArrow from "./pages/Homepage/CarouselArrow";
import Slider from "react-slick";
import { Box, Stack, Container, Typography, Hidden } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { memo } from "react";
import DevTeam from "./DevTeam";


const ContractAbi = require('../../../../smart-contract/artifacts/contracts/' + CollectionConfig.contractName + '.sol/' + CollectionConfig.contractName + '.json').abi;

interface Props {
}

interface State {
  userAddress: string|null;
  network: ethers.providers.Network|null,
  totalSupply: number;
  maxSupply: number;
  maxMintAmountPerTx: number;
  tokenPrice: BigNumber;
  isPaused: boolean;
  isWhitelistMintEnabled: boolean;
  isUserInWhitelist: boolean;
  merkleProofManualAddress: string;
  merkleProofManualAddressFeedbackMessage: string|JSX.Element|null;
  etherscanUrl: string,
  errorMessage: string|JSX.Element|null,
  connection: boolean,
  account: string,
  selectedTeamMember: number
}

const defaultState: State = {
  userAddress: null,
  network: null,
  totalSupply: 0,
  maxSupply: 0,
  maxMintAmountPerTx: 0,
  tokenPrice: BigNumber.from(0),
  isPaused: true,
  isWhitelistMintEnabled: false,
  isUserInWhitelist: false,
  merkleProofManualAddress: '',
  merkleProofManualAddressFeedbackMessage: null,
  etherscanUrl: '',
  errorMessage: null,
  connection: false,
  account: '',
  selectedTeamMember: 0
};

export default class Dapp extends React.Component<Props, State> {
  provider!: Web3Provider;

  contract!: NftContractType;

  private merkleProofManualAddressInput!: HTMLInputElement;

  constructor(props: Props) {
    super(props);

    this.state = defaultState;
   
  }

  componentDidMount = async () => {
    // localStorage.clear();
    // Update the default state with a generic URL before we know the actual network through the connected wallet
    // defaultState.etherscanUrl = this.generateEtherscanUrl();
  }

  async mintTokens(amount: number, names: any[]): Promise<void>
  {
    try {
      await this.contract.mint(amount, names, {value: this.state.tokenPrice.mul(amount)});
    } catch (e) {
      this.setError(e);
    }
  }

  async whitelistMintTokens(amount: number, names: any[]): Promise<void>
  {
    try {
      await this.contract.whitelistMint(amount, Whitelist.getProofForAddress(this.state.userAddress!), names, {value: this.state.tokenPrice.mul(amount)});
    } catch (e) {
      this.setError(e);
    }
  }

  private isWalletConnected(): boolean
  {
    return this.state.userAddress !== null;
  }

  private isContractReady(): boolean
  {
    return this.contract !== undefined;
  }

  private isSoldOut(): boolean
  {
    return this.state.maxSupply !== 0 && this.state.totalSupply < this.state.maxSupply;
  }

  private isNotMainnet(): boolean
  {
    return this.state.network !== null && this.state.network.chainId !== 1;
  }

  private copyMerkleProofToClipboard(): void
  {
    const merkleProof = Whitelist.getRawProofForAddress(this.state.userAddress ?? this.state.merkleProofManualAddress);

    if (merkleProof.length < 1) {
      this.setState({
        merkleProofManualAddressFeedbackMessage: 'The given address is not in the whitelist, please double-check.',
      });

      return;
    }

    navigator.clipboard.writeText(merkleProof);

    this.setState({
      merkleProofManualAddressFeedbackMessage: 
      <>
        <strong>Congratulations!</strong> <span className="emoji">🎉</span><br />
        Your Merkle Proof <strong>has been copied to the clipboard</strong>. You can paste it into <a href={this.state.etherscanUrl} target="_blank">Etherscan</a> to claim your tokens.
      </>,
    });
  }

  render() {
    return (
      <>
        <img id="logo" src="/build/images/header.jpg" alt="Street Skeletonz Banner" style={{borderTop:'1px solid #FDFDFD',  borderBottom:'1px solid #FDFDFD'}}/>

        {this.isNotMainnet() ?

          <div className="not-mainnet">

            You are not connected to the main network.
            <span className="small">Current network: <strong>{this.state.network?.name}</strong></span>
          </div>
          : null}

        {this.state.errorMessage ? <div className="error"><p>{this.state.errorMessage}</p><button onClick={() => this.setError()}>Close</button></div> : null}
        
        {this.isWalletConnected() ?
          <>
            {this.isContractReady() ?
              <>
                <CollectionStatus
                  userAddress={this.state.userAddress}
                  maxSupply={this.state.maxSupply}
                  totalSupply={this.state.totalSupply}
                  isPaused={this.state.isPaused}
                  isWhitelistMintEnabled={this.state.isWhitelistMintEnabled}
                  isUserInWhitelist={this.state.isUserInWhitelist}
                />
                {this.state.totalSupply < this.state.maxSupply ?
                  <MintWidget
                    maxSupply={this.state.maxSupply}
                    totalSupply={this.state.totalSupply}
                    tokenPrice={this.state.tokenPrice}
                    maxMintAmountPerTx={this.state.maxMintAmountPerTx}
                    isPaused={this.state.isPaused}
                    isWhitelistMintEnabled={this.state.isWhitelistMintEnabled}
                    isUserInWhitelist={this.state.isUserInWhitelist}
                    mintTokens={(mintAmount, names) => this.mintTokens(mintAmount,names)}
                    whitelistMintTokens={(mintAmount, names) => this.whitelistMintTokens(mintAmount,names)}
                  />
                  :
                  <div className="collection-sold-out">
                    <h2>Tokens have been <strong>sold out</strong>! <span className="emoji">🥳</span></h2>

                    You can buy from our beloved holders on <a href={this.generateOpenSeaUrl()} target="_blank">OpenSea</a>.
                  </div>
                }
              </>
              :
              <div className="collection-not-ready">
                <svg className="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>

                Loading collection data...
              </div>
            }
          </>
        : null}

        {!this.isWalletConnected() || !this.isSoldOut() ?
            <>

              <div className="no-wallet">
              {!this.isWalletConnected() ? this.ConnectButton() : null}
              
              {/*<div className="use-block-explorer">
                 <a onClick={() => this.toggleMintFromContractHelpOpen()} href={'#'}>How to mint directly from Smart Contract </a>
              </div>*/}
            </div>
            </>
            : null}

      </>
    );
  }

  private setError(error: any = null): void
  {
    let errorMessage = 'Unknown error...';

    if (null === error || typeof error === 'string') {
      errorMessage = error;
    } else if (typeof error === 'object') {
      // Support any type of error from the Web3 Provider...
      if (error?.error?.message !== undefined) {
        errorMessage = error.error.message;
      } else if (error?.data?.message !== undefined) {
        errorMessage = error.data.message;
      } else if (error?.message !== undefined) {
        errorMessage = error.message;
      }
    }

    this.setState({
      errorMessage: null === errorMessage ? null : errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1),
    });
  }

  private generateEtherscanUrl(): string
  {
    return `https://${this.state.network?.chainId === 1 || !this.state.network?.name ? 'www' : this.state.network.name}.etherscan.io/address/${CollectionConfig.contractAddress}`;
  }

  private generateOpenSeaUrl(): string
  {
    const subdomain = this.state.network?.chainId === 1 ? 'www' : 'testnets';

    return `https://${subdomain}.opensea.io/` + (CollectionConfig.openSeaSlug ? 'collection/' + CollectionConfig.openSeaSlug : null);
  }

private ConnectButton() {
  let web3Modal : any;
  let address;
    // initiate web3modal
  const providerOptions = {
    walletlink: {
      package: CoinbaseWalletSDK, // Required
      options: {
        appName: "TheMiners", // Required
        infuraId: '21ac61fe05654d668e8c771009be08ee' // Required unless you provide a JSON RPC url; see `rpc` below
      }
    },
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: '21ac61fe05654d668e8c771009be08ee',
      }
    },
  };

  const newWeb3Modal = new Web3Modal({
    cacheProvider: true, // very important
    network: "rinkeby",
    providerOptions,
    theme: "dark"
  });
  web3Modal = newWeb3Modal
  
  const CustomButton = styled(Button)({
  // your custom styles go here
    marginBottom:'1.5rem',  
    marginTop:'0.5rem', 
    border:'2px solid #fcfcfffd !important',
    backgroundColor: '#fcfcfcfd',
    borderColor: '#fcfcfffd', 
    color: '#fcfcff', 
    borderWidth: '3px',
    borderRadius: '8px',
    filter:'brightness(1)',
    transition: 'filter 0.14s ease-out, backgroundColor 0.2s ease-out',
    '&:hover': {
      backgroundColor: '#fcfcfcff !important',
      background: '#fcfcfcff !important',
      filter:'brightness(1.25)'
    }
}) as typeof Button;
 

//   const sliderSettings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 5,
//     initialSlide: 0,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 1424,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//           initialSlide: 0
//           // infinite: true
//         }
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           initialSlide: 0
//           // infinite: true
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 550,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };
//   const Teams = [
  
//     {
//       name: "Rice Cracker",
//       role: "Boss",
//       description: `World traveler since birth, landed in web3 to help build solid stuff, now inhabiting the PNW with my wife and
// four groms.`,
//       twitter: `https://twitter.com/ricescracker`
//     },
//     {
//       name: "Tankbottoms",
//       role: "Dev",
//       description: `"tank bottoms are the new tank tops"`,
//       twitter: `https://twitter.com/tankbottoms_xyz`
//     },
//     {
//       name: "Cerezo",
//       role: "Artist",
//       description: "Graffiti artist, art toy creator and an illustrator.",
//       twitter: `https://twitter.com/ceresomonky`
//     },
//     {
//       name: "Papitosur4",
//       role: "Project Director",
//       description: "Web2 latin artist web3 Merch and content creator, project promoter/relationship manager.",
//       twitter: `https://mobile.twitter.com/papitosur4`
//     },
//     {
//       name: "Freddy Montero",
//       role: "Ambassador",
//       description: "16 years a pro athlete in South America, North America, Europe and Asia now looking forward to be that link to connect great people into web3 project.",
//       twitter: `https://twitter.com/_fredymontero`
//     }
//   ];
  const CustomButtonMemoized = React.memo(function CustomButtonMemoized() {
    return <CustomButton  variant="contained" href="https://www.premint.xyz/street-skeletonz-collective/" target="_blank"><img style={{width:'100px', display:'inline-block', marginLeft:'auto !important', marginRight:'auto !important'}} src="/build/images/premint.svg" alt="PreMint XYZ Logo" /></CustomButton>;
  });
  return (
    <>
    {/*Header section*/}
    <div style={{padding:'20px'}}>
    <h1 style={{
          textTransform: 'uppercase',
          fontSize: '50px',
          fontWeight: 'bold',
          textAlign: 'left',
          fontFamily:'PoppinsBold'
        }}>Street Skeletonz</h1>
    <p style={{textAlign:'left', fontFamily:'PoppinsThin', fontWeight:'bold'}}>
      The Street Skeletonz 💀 is a collection of 5555 hand-crafted Skeletonz, each uniquely undead digital collectible forever verifiable on the Ethereum blockchain. The Street Collective (SC) represents street artists and will be a platform to showcase many different talented urban artists from around the world. Genesis art by an artist from the streets of Medellin, Colombia to Web3. SC represents Street art foray into leveraging NFTs as a means to fund further large scale graffiti efforts, as well as sustenance. No promises as to roadmap, but proceeds from the collection will directly fund the transition from urban to on-chain artwork. Individuals who participate in the genesis collection will enjoy early access in all subsequent activities from gaming, bi-weekly raffles, merchandise, future drops. Stop by our discord and get to know the team and all the utility.
     </p>
      <div style={{width:'250px', textAlign:'center',marginLeft:'auto',marginRight:'auto',marginTop:'1.5rem'}}>
      <p style={{fontFamily:'PoppinsThin'}}>Secure Your Spot Today</p>

      <CustomButtonMemoized />
      
      <div className="socialLinks2">
        <ul> 
           <li>
              <a href="https://twitter.com/_StCollective" target="_blank">
                <img 
                  style={{
                    background: '#0c0c0c',
                    borderRadius: '50%',
                    border: '2px solid #0c0c0c',
                  }}
                  src="/build/images/twitter.svg" 
                  alt="Twitter Logo" 
                  />
              </a>
            </li> 
            
            <li>
              <a href="https://www.discord.gg/gC5kAaR9" target="_blank">
                <img
                  style={{
                    background: '#0c0c0c',
                    borderRadius: '50%',
                    border: '2px solid #0c0c0c',
                  }}
                src="/build/images/discord.svg" alt="Discord Logo" />
              </a>
            </li>
        </ul>
      </div>
       <img id="logo2" src="/build/images/banner.jpg" alt="Street Skeletonz Banner" style={{borderTop:'1px solid #FDFDFD',  borderBottom:'1px solid #FDFDFD'}}/>
      </div>
      {/*<button   onClick={() => this.connectWallet(web3Modal)} style={{ marginBottom:'1.5rem',  marginTop:'1.5rem', backgroundColor: 'transparent', borderColor: '#1DE00D', color: '#1DE00D', borderWidth: '3px',borderRadius: '15px'}} variant="contained">Connect wallet</button>
      */}
      <p>{address}</p>
      
    </div>
    <DevTeam />
      </>
  )
}
  private sleep(ms : any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async refreshDisplayData(){
    console.log("refreshing UI data");
    this.sleep(750).then(async () =>{
      this.setState({
        totalSupply: (await this.contract.totalSupply()).toNumber(),
        maxMintAmountPerTx: (await this.contract.maxMintAmountPerTx()).toNumber(),
      });
    });
  }
  
  async connectWallet(modal : Web3Modal) {
    const provider = await modal.connect();
    const ethersProvider = new providers.Web3Provider(provider)
    const userAddress = await ethersProvider.getSigner().getAddress()
    //address = userAddress
    this.connect(modal,ethersProvider)
  }

  private async connect(web3Modal : Web3Modal, provider: any) {
    const connection = await web3Modal.connect();
    this.provider = provider;
    const accounts = await provider.listAccounts();
    
    this.setState({
      connection: connection,
      account: accounts[0],
    });
    this.initWallet();

    this.registerWalletEvents(this.provider.provider);

    const MINUTE_MS = 9915001;

    console.log("before interval test");
      const interval = setInterval(() => {
        if(this.state.userAddress !=null){
          this.refreshDisplayData();
        }
      }, MINUTE_MS);
    
    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    
  }

  private async initWallet(): Promise<void>
  {
    const walletAccounts = await this.provider.listAccounts();
    
    this.setState(defaultState);

    if (walletAccounts.length === 0) {
      return;
    }
    
    this.setState({
      userAddress: walletAccounts[0],
      network: await this.provider.getNetwork(),
    });

    if (await this.provider.getCode(CollectionConfig.contractAddress!) === '0x') {
      this.setState({
        errorMessage: 'Could not find the contract, are you connected to the right chain?',
      });

      return;
    }

    this.contract = new ethers.Contract(
      CollectionConfig.contractAddress!,
      ContractAbi,
      this.provider.getSigner(),
    ) as NftContractType;

    this.setState({
      maxSupply: (await this.contract.maxSupply()).toNumber(),
      totalSupply: (await this.contract.totalSupply()).toNumber(),
      maxMintAmountPerTx: (await this.contract.maxMintAmountPerTx()).toNumber(),
      tokenPrice: await this.contract.cost(),
      isPaused: await this.contract.paused(),
      isWhitelistMintEnabled: await this.contract.whitelistMintEnabled(),
      isUserInWhitelist: Whitelist.contains(this.state.userAddress ?? ''),
      etherscanUrl: this.generateEtherscanUrl(),
    });
  }

  private registerWalletEvents(browserProvider: ExternalProvider): void
  {
    // @ts-ignore
    browserProvider.on('accountsChanged', () => {
      this.initWallet();
    });

    // @ts-ignore
    browserProvider.on('chainChanged', () => {
      window.location.reload();
    });
  }
}
