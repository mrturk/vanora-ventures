import {
  Divider,
  CardContent,
  Typography,
  CardActions,
  Card,
  Stack,
} from "@mui/material";
import VanoraButton from "./VanoraButton";

export default function VanoraCard() {
  return (
    <Card sx={{ width: "100%", borderRadius: "0" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ICEWAYS
        </Typography>
        <Typography variant="body2" color="text.secondary">
          City life is changing. So are the habits of urban citizens. 4X4 cars
          that were previously used only on challenging lands are now preferred
          for urban use.
        </Typography>
      </CardContent>
      <CardActions>
        <Stack
          flex="1"
          flexDirection="row"
          justifyContent="space-between"
          gap="8px"
        >
          <Stack flex="1">
            <VanoraButton
              text="Learn More"
              sx={{
                backgroundColor: "#FDE4E5",
                width: "100%",
                ":hover": {
                  backgroundColor: "#FDE4E5",
                },
              }}
            />
          </Stack>
          <Stack flex="1">
            <VanoraButton
              text="Find a Dealer"
              sx={{
                backgroundColor: "#ED1C24",
                width: "100%",
                color: "white",
                ":hover": {
                  backgroundColor: "#ED1C24",
                },
              }}
            />
          </Stack>
        </Stack>
      </CardActions>
      <Divider
        sx={{
          backgroundColor: "#ED1C24",
          height: "7px",
        }}
      />
    </Card>
  );
}
