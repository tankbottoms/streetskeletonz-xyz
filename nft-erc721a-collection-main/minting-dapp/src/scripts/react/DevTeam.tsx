import React, { useState, useEffect, useRef } from "react";
// material
import { Box, Stack, Container, Typography, Hidden } from "@mui/material";
import { varFadeInUp, MotionInView, varFadeInDown } from "./components/animate";
import Slider from "react-slick";
import CarouselArrow from "./pages/Homepage/CarouselArrow";
import MContainer from "./components/MContainer";

interface Props {
}
// import WaveIcon from "components/WaveIcon";
interface State {
  selectedTeamMember: number
}

const defaultState: State = {
  selectedTeamMember: 0
};


export default class DevTeam extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }
  // const sliderRef = useRef();

  private selectTeamMember(member: number): void
  {
    this.setState({
      selectedTeamMember: member 
    }); 
  } 

  render() {
      const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0
          // infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0
          // infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const Teams = [
  
    {
      name: "Rice Cracker",
      role: "Boss",
      description: `World traveler since birth, landed in web3 to help build solid stuff, now inhabiting the PNW with my wife and
four groms.`,
      twitter: `https://twitter.com/ricescracker`
    },
    {
      name: "Tankbottoms",
      role: "Dev",
      description: `"tank bottoms are the new tank tops"`,
      twitter: `https://twitter.com/tankbottoms_xyz`
    },
    {
      name: "Cerezo",
      role: "Artist",
      description: "Graffiti artist, art toy creator and an illustrator.",
      twitter: `https://twitter.com/ceresomonky`
    },
    {
      name: "Papitosur4",
      role: "Project Director",
      description: "Web2 latin artist web3 Merch and content creator, project promoter/relationship manager.",
      twitter: `https://mobile.twitter.com/papitosur4`
    },
    {
      name: "Freddy Montero",
      role: "Ambassador",
      description: "16 years a pro athlete in South America, North America, Europe and Asia now looking forward to be that link to connect great people into web3 project.",
      twitter: `https://twitter.com/_fredymontero`
    }
  ];
    return (
    <>
    {/*Team section*/}
    <div id="teamSection">
            <h1 style={{
              textTransform: 'uppercase',
              fontSize: '50px',
              fontWeight: 'bold',
              textAlign: 'left',
              fontFamily:'PoppinsBold',
              color:'#fff'
            }}>THE TEAM</h1>
            
             <div style={{position:'relative', padding:'10px'}}>
              <Box sx={{ width: 1 }}>
                <Slider {...sliderSettings}>
                  {Teams.map((item, index) => (
                    <div 
                      className="teamMember" 
                      style={{display:'inline-block'}} 
                      onMouseEnter={() => this.selectTeamMember(index)} 
                      onTouchStart={() => this.selectTeamMember(index)} 
                      onClick={() => this.selectTeamMember(index)}
                      key={index}
                    >
                    <Box key={index} sx={{ px: { lg: 2, xs: 1 } }}>
                      <Stack sx={{ position: "relative" }}>
                        <Box  
                          sx={{ 
                            objectFit: "contain",
                            height: "230px",
                            boxSizing: 'border-box',
                            transition: 'padding 0.3s ease-out, filter 0.2s ease-out',
                            border: this.state.selectedTeamMember === index ? "2px solid #FDFDFD" : "none",
                            padding: this.state.selectedTeamMember === index ? "8px" : "none" ,
                            filter: this.state.selectedTeamMember === index ? "saturate(1) brightness(1)" : "saturate(0.3) brightness(0.8)" 
                          }}  
                          component="img" 
                          src={'/build/images/'+item.name+'.jpg'} />
                        <Box sx={{ p: 3}}>
                          <h6 style={{ textTransform: "uppercase", textAlign:'center', color:'#fff' }}>
                            {item.name}
                          </h6>
                          <Typography 
                            sx={{ 
                              fontSize: "24px !important", 
                              fontFamily:'poppins', 
                              textAlign:'center' 
                            }}>
                            {item.role}
                          </Typography>
                          
                          <a href={item.twitter} target="_blank" style={{width: '30px',margin: 'auto',  marginTop:'5px'}}>
                            <img  style={{
                              width: '30px',
                              margin: 'auto',
                              transition: 'opacity 0.3s ease-out',
                              opacity: this.state.selectedTeamMember === index ? "1" : "0.6" ,
                            }} src="/build/images/twitter.svg" alt="Twitter Logo" />
                          </a>
                        </Box>
                      </Stack>
                    </Box>
                    </div>
                  ))}
              </Slider>
              {this.state.selectedTeamMember == 0 ? 
                <p  id="num0Team" style={{ textAlign:'center', color:'#fff',minHeight:'300px' }}>
                  {Teams[0].description}
                </p> 
              : null}
              {this.state.selectedTeamMember == 1 ? 
                <p  id="num2Team"  style={{ textAlign:'center', color:'#fff',minHeight:'300px' }}>
                  {Teams[1].description}
                </p> 
              : null}
              {this.state.selectedTeamMember == 2 ? 
                <p id="num3Team"   style={{ textAlign:'center', color:'#fff',minHeight:'300px' }}>
                  {Teams[2].description}
                </p> 
              : null}
              {this.state.selectedTeamMember == 3 ? 
                <p id="num4Team"   style={{ textAlign:'center', color:'#fff',minHeight:'300px' }}>
                  {Teams[3].description}
                </p> 
              : null}
              {this.state.selectedTeamMember == 4 ? 
                <p id="num5Team"   style={{ textAlign:'center', color:'#fff',minHeight:'300px' }}>
                  {Teams[4].description}
                </p> 
              : null}
              </Box>
            </div>
      </div>
    </>
 )}
}
