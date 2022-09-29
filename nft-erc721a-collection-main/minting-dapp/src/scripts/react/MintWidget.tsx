import { utils, BigNumber } from 'ethers';
import { Bytes32, Uint256, Uint32, Address } from 'soltypes'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import React, { useState } from "react";

interface Props {
  maxSupply: number,
  totalSupply: number,
  tokenPrice: BigNumber,
  maxMintAmountPerTx: number,
  isPaused: boolean,
  isWhitelistMintEnabled: boolean,
  isUserInWhitelist: boolean,
  mintTokens(mintAmount: number, names: any[]): Promise<void>,
  whitelistMintTokens(mintAmount: number, names: any[]): Promise<void>,
}

interface State {
  mintAmount: number,
  names: string[],
  mintFromContractHelpOpen: boolean,
  firstInteracted: boolean,
}

const defaultState: State = {
  mintAmount: 1,
  names: [''],
  mintFromContractHelpOpen: false,
  firstInteracted: false,
};

export default class MintWidget extends React.Component<Props, State> {
  

  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  private canMint(): boolean {
    return !this.props.isPaused || this.canWhitelistMint();
  }

  private canWhitelistMint(): boolean {
    return this.props.isWhitelistMintEnabled && this.props.isUserInWhitelist;
  }

  private incrementMintAmount(): void {
    this.setState({
      mintAmount: Math.min(this.props.maxMintAmountPerTx, this.state.mintAmount + 1),
    });
  }

  private decrementMintAmount(): void {
    this.setState({
      mintAmount: Math.max(1, this.state.mintAmount - 1),
    });
  }

  private logNames(name: string, index: number): void {
    let names2 = this.state.names;
    names2[index] = name;
    console.log("Minting Street Skeletonz #"+index +": "+name);

    this.setState({
      names: names2,
    });
  }
  private async mint(): Promise<void> {
    if (!this.props.isPaused) {
      await this.props.mintTokens(this.state.mintAmount,this.state.names);

      return;
    }

    await this.props.whitelistMintTokens(this.state.mintAmount,this.state.names);
  }
  private toggleMintFromContractHelpOpen(): void {
    this.setState({
      mintFromContractHelpOpen: !this.state.mintFromContractHelpOpen,
      firstInteracted: true,
    });
  }

  private renderTextBoxes(){
    const ValidationTextField = TextField;
    return (
      <>
        
        
      </>
    )     
  }
  render() {
    let modalContainerClass = (this.state.mintFromContractHelpOpen ? 'five' : 'five out');

    if(!this.state.firstInteracted)
      modalContainerClass = 'five'
    

  const CustomButton = styled(Button)({
  // your custom styles go here
    marginBottom:'1.5rem',  
    marginTop:'1.5rem', 
    border:'2px solid #fcfcff !important',
    backgroundColor: 'transparent',
    borderColor: '#fcfcff', 
    color: '#fcfcff', 
    borderWidth: '3px',
    borderRadius: '15px',
    minWidth:'150px',
    width:'unset !important',
    '&:hover': {
      backgroundColor: '#a9a9a950 !important',
      background: '#a9a9a950 !important'
    }
}) as typeof Button;
  const CustomButton2 = styled(Button)({
  // your custom styles go here
    border:'2px solid #fcfcff !important',
    backgroundColor: 'transparent',
    borderColor: '#fcfcff', 
    color: '#fcfcff', 
    borderWidth: '3px',
    borderRadius: '50%',
    maxWidth:'40.5px',
    '&:hover': {
      backgroundColor: '#a9a9a950 !important',
      background: '#a9a9a950 !important'
    }
}) as typeof Button;
    return (
      <>
        {this.state.firstInteracted ? 
          <div id="modal-container" className={modalContainerClass}>
            <div className={'modal-background'}>
              <div className={"modal proofModal"}>
              <div  className={"mintHelpModal"}>
                  <button
                     onClick={() => this.toggleMintFromContractHelpOpen()}
                    className="Shop__close">
                    ×
                  </button>
                <h2>Mint Street Skeletonz</h2>
                  

                 {/* <label htmlFor="merkle-proof-manual-address">Enter a unique name!</label>
                  <label htmlFor="merkle-proof-manual-address" style={{opacity:'0.7', display:'block',marginBottom:'10px'}}>Max 30 characters</label>*/}
                  {this.renderTextBoxes()}
                   <CustomButton onClick={() => this.mint()} variant="contained">Mint {this.state.mintAmount} Street Skeletonz</CustomButton>
                  <button  className={modalContainerClass} style={{display:"block", margin:"auto", marginTop:"30px",backgroundColor:'transparent',color:'#ffffff',border:0, textDecoration:'underline'}} onClick={() => this.toggleMintFromContractHelpOpen()}>Go Back</button>
                  
              </div>
              </div>
              {/*<button  className={modalContainerClass} style={{display:"block", margin:"auto", marginTop:"30px"}} onClick={() => this.toggleShop()}>Exit Shop</button>*/}
            </div>
          </div>
          :<></>
        }
        {this.canMint() ?
          <div className="mint-widget">
            {/*<div className="preview">
              <img src="/build/images/preview.png" alt="Collection preview" />
            </div>*/}

            <div className="price">
              <strong style={{opacity:'0.6'}}>Total:</strong> {utils.formatEther(this.props.tokenPrice.mul(this.state.mintAmount))} ETH
            </div>

            <div className="controls">
              <CustomButton2 className="decrease" onClick={() => this.decrementMintAmount()}>-</CustomButton2>
              <span className="mint-amount"> {this.state.mintAmount} Street Skeletonz</span>
              <CustomButton2 className="increase" onClick={() => this.incrementMintAmount()}>+</CustomButton2>
              
            </div>
           
            <CustomButton onClick={() => this.toggleMintFromContractHelpOpen()} variant="contained">Mint Skeletonz</CustomButton>
          </div>
          :
          <div className="cannot-mint">
            <span className="emoji">⏳</span>
            
            {this.props.isWhitelistMintEnabled ? <>You are not included in the <strong>whitelist</strong>.</> : <>The contract is <strong>paused</strong>.</>}<br />
            Please come back during the next sale!
          </div>
        }
      </>
    );
  }
}
