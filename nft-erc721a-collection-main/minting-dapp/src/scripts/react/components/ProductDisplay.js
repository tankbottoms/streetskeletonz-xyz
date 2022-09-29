// material
import { useRef, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { Stack, Container, Box, Typography, Button, Grid, Icon, Hidden } from "@mui/material";
import SvgIconStyle from "components/SvgIconStyle";
import MContainer from "components/MContainer";
import Slider from "react-slick";
import WaveIcon from "components/WaveIcon";
import ProductBuyButton from "components/ProductBuyButton";

const sliderSettings = {
  dots: false,
  fade: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};


// ----------------------------------------------------------------------
const Products = [{ title: "Soap" }, { title: "Sexy-T" }, { title: "Hoodie" }, { title: "W;x" }];
export default function Homepage(props) {
  const Items = props.products;
  console.log("MEMES");
  console.log(props);
  const slideRef = useRef();
  const [active, setActive] = useState(0);
  const [currentImage, setImage] = useState('https://cdn.shopify.com/s/files/1/0616/2645/0079/products/Soap.png?v=1656546925');
  const [productt, setProduct] = useState(2);
  const goToSlide = (slide) => slideRef.current.slickGoTo(slide);

    return (
    <MContainer id="products" sx={{ position: "relative", pt: 14 }}>
      <Typography variant="h2" align="left" sx={{}}  color="primary">
        
        <Typography component="span" variant="h2" color="primary" style={{position:'relative',zIndex:2}}>
          NEW PRODUCTS
        </Typography><WaveIcon style={{position:'relative', left:-200, bottom:-14, zIndex:1,transform:'rotate(-8deg) rotateY(180deg)  scale(0.8)'}}/>
      </Typography>
      {/*<Typography align="center"  sx={{ position: "relative", mt: 1, mb: 4 }}>
        <b>Need a new hoodie? Craving all-natural soap? </b>

      </Typography>*/}
      <Stack direction="row" justifyContent="center" sx={{ mb: 3 }} flexWrap="wrap" style={{marginTop:'36px'}}>
        {Items.map((item, index) => (
          <Stack
            onClick={() => {
              goToSlide(index);
              setActive(index);
              setImage(item.images[0].src);
            }}
            alignItems="center"
            spacing={2}
            sx={{ m: 3, cursor: "pointer", transition: "all 0.2s", "&:hover": { "& span, h6": { color: "#E9CD5F" } } }}
          >
            <SvgIconStyle src={`/images/icons/${item.handle}.png`} sx={{ width: 38, height: 38, color: active === index ? "#E9CD5F" : "#7C8998" }} />
            <Typography variant="h6" sx={{ textTransform: "uppercase", color: active === index ? "#E9CD5F" : "#7C8998" }}>
              {item.title}
            </Typography>
          </Stack>
        ))}
      </Stack>

      <Slider {...sliderSettings} ref={slideRef}>
        {Items.map((product, index) => (
          
          <>
            <Grid container alignItems="center" rowSpacing={5} style={{alignItems:'flex-start'}}>
              <Grid item md={7} sm={6} >
                <Stack direction={{ md: "row-reverse", xs: "column" }} sx={{ position: "relative", height: 1 }} alignItems="center" justifyContent="space-between">
                  <Box component="img" src={''} sx={{ position: "absolute", width: { md: "initial", sm: "120%", xs: 1 }, top: 0, left: 0 }} />
                  <Box component="img" src={currentImage} sx={{ width: { lg: 0.8, xs: 0.8 }, position: "relative",padding:'30px' }} /> 
                    
                  
                  {/* <Box sx={{ width: 1, height: 460, background: "linear-gradient(180deg, rgba(1, 16, 47, 0) 70%,  #090E2F 93.75%), url(/images/cyber11.png)", backgroundSize: '100%', position: "relative" }} /> */}
{
                  <Stack spacing={2} direction={{ md: "column", xs: "row" }} sx={{ position: "relative" }}>
                    {product.images.map(({ src }) => (
                      <Box
                        component="img"
                        onClick={() => {
                          setImage(src);
                          setActive(index);
                          setProduct(product);
                        }}
                        src={src}
                        sx={{
                          width: 78,
                          height: 78,
                          cursor: "pointer",
                          borderRadius: "50%",
                          p: 1,
                          transition: "all 0.2s",
                          border: "2px solid transparent",
                          zIndex: 60,
                          "&:hover": { border: "2px solid #E9CD5F" }
                        }}
                      />
                    ))}
                  </Stack>}
                </Stack>
              </Grid>
              <Grid item md={5} sm={6} >
                <Stack sx={{ position: "relative", paddingTop:'40px',zIndex: active === index ? 1600 : 2 }}>
                  <Typography variant="h2"  color="primary">{product.title}</Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                    ${product.variants[0].price}
                  </Typography>
                  {<Typography sx={{ mt: 2 }}>{product.description}</Typography>
                  }
                  <ProductBuyButton
                    addVariantToCart={props.addVariantToCart}
                    client={props.client}
                    key={product.id.toString()}
                    product={product}
                  />
                </Stack>
              </Grid>
            </Grid>
          </>
        ))}
      </Slider>
    </MContainer>
  );
}
