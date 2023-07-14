import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
const VanoraNavBar = () => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.down("lg"));
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    if (!isLg) {
      setOpenDrawer(false);
    }
  }, [isLg]);

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "#FFFFFF",
        color: "#400E03",
        paddingX: `${isLg ? "20px" : "70px"}`,
        paddingY: "10px",
        fontWeight: "bold !important",
      }}
    >
      <Stack
        flex="1"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={isLg ? "row-reverse" : "row"}
      >
        <Stack
          sx={{
            "&& .logo": {
              width: "170px",
              height: "44px",
            },
          }}
        >
          <img className="logo" src="/images/logo.png" alt="logo" />
        </Stack>
        <Stack
          sx={{
            "&& .list": {
              display: "flex",
            },
          }}
        >
          {isLg ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                setOpenDrawer(true);
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <List className="list">
              {[
                "Show All Tyres",
                "Find a Dealer",
                "Guides & Videos",
                "Go with",
                "Service & Help",
              ].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    sx={{
                      width: "180px",
                      textAlign: "center",
                    }}
                  >
                    <ListItemText
                      sx={{
                        "&& .MuiTypography-root": {
                          fontWeight: "bold",
                        },
                      }}
                      primary={text.toLocaleUpperCase()}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
        </Stack>
      </Stack>
      <Drawer
        sx={{
          "&& .MuiPaper-root": {
            width: "248px",
          },
        }}
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
      >
        <Stack
          sx={{
            "&& .logo": {
              width: "170px",
              height: "44px",
              padding: "20px",
            },
          }}
        >
          <img className="logo" src="/images/logo.png" alt="logo" />
        </Stack>
        <Divider />
        <List className="list">
          {[
            "Show All Tyres",
            "Find a Dealer",
            "Guides & Videos",
            "Go with",
            "Service & Help",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => {
                  setOpenDrawer(false);
                }}
              >
                <ListItemText
                  sx={{
                    "&& .MuiTypography-root": {
                      fontWeight: "bold",
                    },
                  }}
                  primary={text.toLocaleUpperCase()}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};
export default VanoraNavBar;
