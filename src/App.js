import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import VanoraButton from "./components/VanoraButton";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import VanoraLayout from "./components/VanoraLayout";
import VanoraCard from "./components/VanoraCard";
import { useState } from "react";
import { LeftArrowIcon, RightArrowIcon } from "./icons/icons";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const items = [
  <Stack paddingX="5px" justifyContent="center" alignItems="center">
    <VanoraCard />
  </Stack>,
  <Stack paddingX="5px" justifyContent="center" alignItems="center">
    <VanoraCard />
  </Stack>,
  <Stack paddingX="5px" justifyContent="center" alignItems="center">
    <VanoraCard />
  </Stack>,
  <Stack paddingX="5px" justifyContent="center" alignItems="center">
    <VanoraCard />
  </Stack>,
  <Stack paddingX="5px" justifyContent="center" alignItems="center">
    <VanoraCard />
  </Stack>,
  <Stack paddingX="5px" justifyContent="center" alignItems="center">
    <VanoraCard />
  </Stack>,
  <Stack paddingX="5px" justifyContent="center" alignItems="center">
    <VanoraCard />
  </Stack>,
  <Stack paddingX="5px" justifyContent="center" alignItems="center">
    <VanoraCard />
  </Stack>,
];
function App() {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.down("lg"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const [activeIndex, setActiveIndex] = useState(0);

  const renderDotsItem = ({ isActive }) => {
    return isActive ? (
      <Stack
        sx={{
          height: "20px",
          width: "20px",
          position: "relative",
        }}
      >
        <Stack
          sx={{
            cursor: "pointer",
            position: "absolute",
            bottom: "-3px",
          }}
          bgcolor="#ED1C24"
          borderRadius="50%"
          width="12px"
          height="12px"
        />
      </Stack>
    ) : (
      <Stack
        sx={{
          height: "20px",
          width: "20px",
        }}
      >
        <Stack
          sx={{
            cursor: "pointer",
          }}
          bgcolor="#ED1C24"
          borderRadius="50%"
          width="6px"
          height="6px"
        />
      </Stack>
    );
  };
  const slidePrev = () => {
    console.log(activeIndex);
    if (activeIndex - 1 >= 0) {
      setActiveIndex(activeIndex - 1);
    }
  };
  const slideNext = () => {
    //apiden gelen datasayısına göredinamik değiştirilebilir
    console.log(activeIndex);
    if (
      isMd ? activeIndex + 1 < items.length : activeIndex + 1 < items.length - 2
    ) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const syncActiveIndex = ({ item }) => {
    setActiveIndex(item);
  };

  return (
    <VanoraLayout>
      <Stack
        marginTop={isLg ? "68px" : "80px"}
        justifyContent="center"
        alignItems="center"
        width="100%"
        paddingY="100px"
        color="red"
        sx={{
          backgroundImage: `url("images/Hero.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Stack gap="40px">
          <Stack color="white   ">
            <Typography textAlign="center" maxWidth="700px" variant="h1">
              Nothing can stop you
            </Typography>
          </Stack>
          <Stack justifyContent="center" alignItems="center">
            <VanoraButton
              sx={{ width: "150px", height: "50px" }}
              text="FIND OUT MORE"
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack gap="20px" paddingY="100px" bgcolor="#F9F6F6">
        <Stack>
          <Typography variant="h3" textAlign="center">
            Featured Products
          </Typography>
        </Stack>
        <Stack paddingX="100px">
          <Stack
            width={isLg ? "100%" : "80%"}
            margin="auto"
            position="relative"
          >
            <AliceCarousel
              activeIndex={activeIndex}
              onSlideChanged={syncActiveIndex}
              disableButtonsControls
              renderDotsItem={renderDotsItem}
              items={items}
              responsive={responsive}
            />
            {!isLg && (
              <>
                <Stack
                  sx={{ cursor: "pointer" }}
                  onClick={slideNext}
                  position="absolute"
                  right="-70px"
                  top="30%"
                  width="48px"
                  height="48px"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="5px"
                  bgcolor="#400E03"
                >
                  <RightArrowIcon />
                </Stack>
                <Stack
                  sx={{ cursor: "pointer" }}
                  onClick={slidePrev}
                  position="absolute"
                  left="-70px"
                  top="30%"
                  width="48px"
                  height="48px"
                  borderRadius="5px"
                  justifyContent="center"
                  alignItems="center"
                  bgcolor="#400E03"
                >
                  <LeftArrowIcon />
                </Stack>
              </>
            )}
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          background:
            "linear-gradient(145deg, rgba(23,23,29,1) 0%, rgba(99,99,108,1) 0%, rgba(0,0,0,1) 100%, rgba(0,212,255,1) 100%)",
        }}
        padding="50px"
        gap="20px"
      >
        <Stack
          flex="1"
          gap="20px"
          flexDirection={isMd ? "column" : "row"}
          justifyContent="space-between"
        >
          <Stack>
            <Typography color="white" variant="h3" maxWidth="680px">
              Feel the excellent wet braking with Driveways!
            </Typography>
          </Stack>
          <Stack justifyContent="center" alignItems="center">
            <VanoraButton
              sx={{ paddingTop: "12px" }}
              src="images/button.png"
              onClick={() => {
                window.open("https://www.youtube.com/@LassaTyres", "_blank");
              }}
            />
          </Stack>
        </Stack>
        <Stack>
          <iframe
            width="100%"
            height={isMd ? "200" : "693"}
            src="https://www.youtube.com/embed/D-F0CTTFxYw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </Stack>
      </Stack>
    </VanoraLayout>
  );
}

export default App;
