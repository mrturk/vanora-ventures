import { Stack } from "@mui/material";
import VanoraNavBar from "./VanoraNavBar";

const VanoraLayout = ({ children }) => {
  return (
    <Stack>
      <Stack>
        <VanoraNavBar />
      </Stack>
      {children}
    </Stack>
  );
};
export default VanoraLayout;
