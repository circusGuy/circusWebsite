import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../CSS/footer.css";

export default function Footer() {
  return (
    <footer>
      <div class="footer-content">
        <a href="/contact" underline="none">
          © 2025 Leifland Productions, LLC | All Rights Reserved
        </a>
        <div class="logos">
          <a href="https://www.facebook.com/UMDclubrunning/" class="link">
            <FaFacebook size={25} />
          </a>
          <a href="https://twitter.com/umdclubrunning" class="link">
            <FaTwitter size={25} />
          </a>
          <a href="https://www.instagram.com/umdclubrunning/" class="link">
            <FaInstagram size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
}
