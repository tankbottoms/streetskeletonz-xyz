import { useState, useEffect, useRef } from "react";
// material
import { Box, Stack, Container, Typography, Hidden } from "@mui/material";

import { varFadeInUp, MotionInView, varFadeInDown } from "components/animate";
import Slider from "react-slick";
import CarouselArrow from "./CarouselArrow";
import MContainer from "components/MContainer";

const Teams = [
  {
    name: " ",
    role: " "
  },
  {
    name: " ",
    role: " "
  }
];
export default function MainGameElements() {
  const sliderRef = useRef();

  const sliderSettings = {
    dots: false,
    // infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 0,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 0,
          initialSlide: 0
          // infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 0
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 0
        }
      }
    ]
  };
  return (
    <MContainer id="founders" sx={{ position: "relative", pt: 20, pb: 20 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 6 }}>
        <Stack>
          <Typography variant="h2"  color="primary">
              <Typography component="span" variant="h2" color="primary">
                The{" "}
              </Typography>
              Founders
            </Typography>
        </Stack>
        {/*<Hidden mdUp>
          <Stack direction="row" justifyContent="center" spacing={2}>
            <CarouselArrow direction="prev" onClick={() => sliderRef.current.slickPrev()} />
            <CarouselArrow direction="next" onClick={() => sliderRef.current.slickNext()} />
          </Stack>
        </Hidden>*/}
      </Stack>
      <Box sx={{ width: 1 }}>
        <Slider {...sliderSettings} ref={sliderRef}>
          {Teams.map((item, index) => (
            <Box key={index} sx={{ px: { lg: 2, xs: 1 } }}  sx={{  width: "200px" }}>
              <Stack sx={{ position: "relative", margin: "auto",width: "200px"  }}>
                <Box sx={{  width: "200px" }} component="img" src={`/images/card ${index + 1}.png`} />
                <Box sx={{ p: 3, position: "absolute", bottom: 0 }}>
                  <Typography variant="h6" color="#fff" sx={{ textTransform: "uppercase" }}>
                    {item.name}
                  </Typography>
                  <Typography sx={{ fontSize: "12px !important" }}>{item.role}</Typography>
                </Box>
              </Stack>
            </Box>
          ))}
        </Slider>
      </Box>
    </MContainer>
  );
}
