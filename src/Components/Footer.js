import { Box, Link } from "@mui/material";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../CSS/footer.css";

export default function Footer() {
  return (
    <footer>
      <Box
        className="border-t border-white border-opacity-50 pt-3 pb-3 w-full footer"
        sx={{ "& a": { color: "white" } }}
      >
          <div class="footer-content">
            <div>
            <Link href="mailto:umdwebmast3r@gmail.com" underline="none">
              <strong>
                © 2025 Leifland Productions, LLC | All Rights Reserved
              </strong>
            </Link>
            </div>
            <div class="logos">
              <Link href="https://www.facebook.com/UMDclubrunning/?fref=ts" class='link'>
                <FaFacebook size={25} />
              </Link>
              <Link href="https://twitter.com/umdclubrunning" class='link'>
                <FaTwitter size={25} />
              </Link>
              <Link href="https://www.instagram.com/umdclubrunning/" class='link'>
                <FaInstagram size={25} />
              </Link>
            </div>
          </div>
        
      </Box>
    </footer>
  );
}
