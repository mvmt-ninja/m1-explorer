import Typography from "@mui/material/Typography";
import HeaderSearch from "../layout/Search/Index";
import Box from "@mui/material/Box";
import NetworkInfo from "../Analytics/NetworkInfo/NetworkInfo";
import UserTransactionsPreview from "./UserTransactionsPreview";
import {PlaygroundBanner} from "./Components/PlaygroundBanner";

export default function LandingPage() {
  return (
    <Box>
      <Typography variant="h3" component="h3" marginBottom={4}>
        M1 Explorer
      </Typography>
      <PlaygroundBanner />
      <NetworkInfo isOnHomePage />
      <HeaderSearch />
      <UserTransactionsPreview />
    </Box>
  );
}
