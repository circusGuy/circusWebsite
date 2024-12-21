import { Box, Stack, Link, Divider } from "@mui/material";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../CSS/footer.css";

export default function Footer() {
  return (
    <footer>
      <Box
        className="border-t border-white border-opacity-70 pt-6 pb-1 w-full footer"
        sx={{ "& a": { color: "white" } }}
      >
        <Stack alignItems="center" spacing={1} className="mb-1">
          <Stack direction="row" spacing={3}>
            <Link href="https://www.facebook.com/UMDclubrunning/?fref=ts">
              <FaFacebook size={32} />
            </Link>
            <Link href="https://twitter.com/umdclubrunning">
              <FaTwitter size={32} />
            </Link>
            <Link href="https://www.instagram.com/umdclubrunning/">
              <FaInstagram size={32} />
            </Link>
          </Stack>
          <Divider sx={{ bgcolor: "gray", width: "100%"}} />

          <Link href="mailto:umdwebmast3r@gmail.com" underline="none">
            <strong>
              © 2025 Leifland Productions, LLC | All Rights Reserved
            </strong>
          </Link>
        </Stack>
      </Box>
    </footer>
  );
}
