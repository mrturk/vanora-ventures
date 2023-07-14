/* eslint-disable jsx-a11y/alt-text */
import { Button } from "@mui/material";

const VanoraButton = ({ sx, text, src, onClick }) => {
  return (
    <Button
      sx={{
        backgroundColor: "white",
        color: "#ED1C24",
        fontWeight: "bold",
        fonSize: "18px",
        borderRadius: "0",
        ":hover": {
          backgroundColor: "white",
        },
        ...sx,
      }}
      onClick={onClick}
    >
      {src ? <img src={src} /> : text}
    </Button>
  );
};
export default VanoraButton;
