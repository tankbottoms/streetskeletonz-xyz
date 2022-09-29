import { useState, useEffect, useRef } from "react";
// material
import { Box, Stack, Container, Typography, Hidden } from "@mui/material";

import { varFadeInUp, MotionInView, varFadeInDown } from "components/animate";
import Slider from "react-slick";
import CarouselArrow from "./CarouselArrow";
import MContainer from "components/MContainer";

const Elements = [
  {
    title: "bio-pass",
    image: "pilotlicense",
    description:
      "SkyPunk Legacy NFT is a Bio-Pass granting players access to the game environment. A Limited number of paid and free trial community Bio-Passes are released periodically."
  },
  {
    image: "chemists",
    title: "chembot",
    description: "ChemBots work in labs within Neon Skies. Their job is to craft materials required for advanced game play. A single ChemBot is required."
  },
  {
    title: "neon ice capsules",
    image: "ice caps",
    description: "Neon Ice is a toxic substance that is chemicaly similar to dry ice. Capsules of Neon Ice are added to each Weather Drone to seed the clouds successfully. Neon Ice makes skies glow."
  },
  {

    image: "drones",
    title: "weather drones",
    description: "Drones are remote-operated machines equipped with enough Explosive Capacity (EC) to inject Neon Ice seeding materials into the sky. Players will need at least one Weather Drone."

  }
];
export default function MainGameElements() {
  const sliderRef = useRef();

  const sliderSettings = {
    dots: false,
    // infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
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
          slidesToShow: 2.2,
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
    <MContainer id="gameassets" sx={{ position: "relative", pt: 20 }}>
      <Stack direction="row" alignItems="center" justifyContent={{ md: "center", xs: "space-between" }} sx={{ mb: 6 }}>
        <Typography variant="h2" sx={{ textAlign: { lg: "center", md: "left" } }}>
          MAIN GAME{" "}
          <Typography component="span" variant="h2" color="primary">
            ASSETS
          </Typography>
        </Typography>
        <Hidden mdUp>
          <Stack direction="row" justifyContent="center" spacing={2}>
            <CarouselArrow direction="prev" onClick={() => sliderRef.current.slickPrev()} />
            <CarouselArrow direction="next" onClick={() => sliderRef.current.slickNext()} />
          </Stack>
        </Hidden>
      </Stack>
      <Box sx={{ width: 1 }}>
        <Slider {...sliderSettings} ref={sliderRef}>
          {Elements.map((item, index) => (
            <Box key={index} sx={{ px: 1 }}>
              <Stack>
                <Box component="img" src={`/images/${item.image}.png`} />
                <Stack sx={{ mt: "-2px", px: 3, pt: 4, pb: 6, background: "linear-gradient(0deg, #01102F 0%, #24103F 100%, #01102F 100%);" }}>
                  <Typography variant="h5" color="#fff" sx={{ textTransform: "uppercase" }}>
                    {item.title}
                  </Typography>
                  <Typography>{item.description}</Typography>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Slider>
      </Box>
    </MContainer>
  );
}
