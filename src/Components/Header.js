import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../CSS/header.css";
import logo from "../Images/kingdom-of-wonders.png";

export default function Header() {
  const location = useLocation();
  const path = location.pathname;
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <div class="navbar desktop-only">
        <div class="header-container">
          <img src={logo} alt="Kingdom of Wonders Logo" className="logo" />

          {/* Desktop Navigation */}
          <div class="navGroup">
            <a href="/" class={`${path === "/" ? "active" : ""}`}>
              Home
            </a>
            <a
              href="/schedule"
              class={`${path === "/schedule" ? "active" : ""}`}
            >
              Schedule
            </a>
            <a href="/photos" class={`${path === "/photos" ? "active" : ""}`}>
              Gallery
            </a>
            &nbsp;
            <a
              href="/concessions"
              class={`${path === "/concessions" ? "active" : ""}`}
            >
              Concessions
            </a>
            <a href="/faq" class={`${path === "/faq" ? "active" : ""}`}>
              FAQ
            </a>
            <a href="/contact" class={`${path === "/contact" ? "active" : ""}`}>
              Contact
            </a>
          </div>
        </div>
      </div>
      <div class="mobile-only">
        <div class="mobile-header border-b border-white border-opacity-50">
          <a href="/">
            <img
              src={logo}
              alt="Kingdom of Wonders Logo"
              className="logo"
              href="/home"
            />
          </a>
          <div class="icon">
            <IconButton
              edge="start"
              color="white"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ color: "white" }}
            >
              <MenuIcon sx={{ fontSize: "5vh" }} />{" "}
            </IconButton>
          </div>
        </div>

        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              backgroundColor: "purple",
              color: "#efc524",
              textShadow: "0 5px 6px rgba(0, 0, 0, 0.7)",
            },
          }}
        >
          <div className="drawer-header mt-3">
            <IconButton>
              <CloseIcon
                onClick={toggleDrawer(false)}
                className="close-button"
                sx={{color: "#efc524"}}
              />
            </IconButton>
          </div>
          <List className="drawer-list">
            <ListItem
              button
              component="a"
              href="/"
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="/schedule"
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="Schedule" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="/photos"
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="Gallery" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="/concessions"
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="Concessions" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="/faq"
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="FAQ" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="/contact"
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    </>
  );
}
