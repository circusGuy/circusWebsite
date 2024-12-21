import { Link, Stack } from "@mui/material";
import { useLocation } from 'react-router-dom';
import "../CSS/header.css";
import logo from "../Images/kingdom-of-wonders.png";

export default function Header() {
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="header-container">
        <img src={logo} alt="Kingdom of Wonders Logo" className="logo" href='/home' />
        <div className="lollipop-bar">
          <Stack className="links" direction={"row"} spacing={8}>
            <Link href="/" class={`${location.pathname === "/" ? "active" : ""}`}>Home</Link>
            <Link href="/schedule" class={`${location.pathname === "/schedule" ? "active" : ""}`}>Tour</Link>
            <Link href="/photos" class={`${location.pathname === "/photos" ? "active" : ""}`}>Gallery</Link>
            <Link href="/schedule" class={`${location.pathname === "/schedule" ? "active" : ""}`}>Schedule</Link>
            <p/>
            <p/>
            <p/>
            <p/>
            <Link href="/schedule" class={`${location.pathname === "/schedule" ? "active" : ""}`}>Schedule</Link>
            <Link href="/photos" class={`${location.pathname === "/photos" ? "active" : ""}`}>Gallery</Link>
            <Link href="/faq" class={`${location.pathname === "/faq" ? "active" : ""}`}>FAQ</Link>
            <Link href="/contact" class={`${location.pathname === "/contact" ? "active" : ""}`}>Contact</Link>
          </Stack>
        </div>
      </div>
    </div>
  );
}
