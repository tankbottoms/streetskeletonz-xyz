import { useState, useEffect, useRef } from "react";
// material
import { Box, Stack, Container, Typography, Hidden } from "@mui/material";

import { varFadeInUp, MotionInView, varFadeInDown } from "components/animate";
import Slider from "react-slick";
import CarouselArrow from "./CarouselArrow";
import MContainer from "components/MContainer";
import WaveIcon from "components/WaveIcon";

const Teams = [
  
  {
    name: " ",
    role: "Founder"
  },
  {
    name: " ",
    role: "Founder"
  },
  {
    name: " ",
    role: "Graphic Designer"
  },
  {
    name: " ",
    role: "Discord Manager"
  },
  {
    name: " ",
    role: "Soap Maker"
  },
  {
    name: " ",
    role: "Meme Coordinator"
  },
  {
    name: " ",
    role: "Web Developer"
  },
  {
    name: " ",
    role: "Artist"
  },
  {
    name: " ",
    role: "Graphic Designer"
  },
  {
    name: " ",
    role: "Community Manager"
  }
];
export default function MainGameElements() {
  const sliderRef = useRef();

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    responsive: [
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
          slidesToShow: 2.1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <MContainer id="team" sx={{ position: "relative", pt: 20, pb: 20 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 6 }}>
        <Stack>
          <Typography component="span" variant="h2"  color="primary"  style={{position:'relative',zIndex:2}}>
              THE TEAM
            </Typography><WaveIcon style={{position:'relative', left:-15, top:-25, zIndex:1,transform:'rotate(-9deg) rotateY(180deg) scale(0.8)'}}/>
        </Stack>
        
          <Stack direction="row" justifyContent="center" spacing={2}>
            <CarouselArrow direction="prev" onClick={() => sliderRef.current.slickPrev()} />
            <CarouselArrow direction="next" onClick={() => sliderRef.current.slickNext()} />
          </Stack>
        
      </Stack>
      <Box sx={{ width: 1 }}>
        <Slider {...sliderSettings} ref={sliderRef}>
          {Teams.map((item, index) => (
            <Box key={index} sx={{ px: { lg: 2, xs: 1 } }}>
              <Stack sx={{ position: "relative" }}>
                <Box  sx={{ objectFit: "contain", height: "230px" }}  component="img" src={`/images/dev card ${index + 1}.png`} />
                <Box sx={{ p: 3}}>
                  <Typography variant="h6" color="#fff" sx={{ textTransform: "uppercase", textAlign:'center' }}>
                    {item.name}
                  </Typography>
                  <Typography sx={{ fontSize: "24px !important", fontFamily:'poppins', textAlign:'center' }}>{item.role}</Typography>
                </Box>
              </Stack>
            </Box>
          ))}
        </Slider>
      </Box>
    </MContainer>
  );
}
