import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";
import { Button, TextField } from "@mui/material";
import "./SideNavbar.css";
import AdminLTELogo from "../../Logo/AdminLTELogo.png";
import user from "../../Image/user.jpg";
import new_logo from "../../Image/new_logo.png";
import number6 from "../../Image/number6.png";
import { SearchOutlined } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(12)} + 1px)`,
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  ...(open && {
    width: `calc(100% - 0px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideNavbar() {
  const [open, setOpen] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ display: "flex" }} className="main">
      <div className="drawer_main">
        <Drawer className="drawer" variant="permanent" open={open}>
          <a className="logo_main">
            <img className="logo" src={AdminLTELogo} alt="Logo" />
            <span className="logo-text">AdminLTE 3</span>
          </a>
          <Divider className="divider_logo_buttom" />

          <a className="user_main">
            <img className="user" src={user} alt="Logo" />
            <span className="user_text">Alexander Pierce</span>
          </a>
          <Divider className="divider_logo_buttom" />
          <TextField
            className="search_bar"
            variant="filled"
            id="standard-bare"
            placeholder="Search"
            InputProps={{
              endAdornment: (
                <IconButton className="searchbar_button">
                  <SearchOutlined />
                </IconButton>
              ),
            }}
          />

          <div>
            <Accordion
              className="accordion_dashboard"
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                className="accordion_dashboard_summery"
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <i className="fa-solid fa-gauge-high"></i>
                <Typography className="typo_dashboard">Dashboard</Typography>
                {<ExpandMoreIcon sx={{ color: "white", marginLeft: "73px" }} />}
              </AccordionSummary>
              <AccordionDetails className="accordion_button">
                <Button className="accordion_button_sub">
                  <i className="fa-regular fa-circle"></i>Dashboard v1
                </Button>
                <Button className="accordion_button_sub">
                  <i className="fa-regular fa-circle"></i>Dashboard v2
                </Button>
                <Button className="accordion_button_sub">
                  <i className="fa-regular fa-circle"></i>Dashboard v3
                </Button>
              </AccordionDetails>
            </Accordion>
            <Button className="sidenavbar_button">
              <AppsIcon />
              Widgets
              <img className="new_image_logo" src={new_logo} alt="new" />
            </Button>
          </div>

          <Accordion
            className="accordion_dashboard"
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              className="accordion_dashboard_summery"
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <i class="fa-regular fa-copy"></i>
              <Typography className="typo_dashboard">Layout Options</Typography>
              <img className="image_number6" src={number6} alt="new" />
              {<ExpandMoreIcon sx={{ color: "white", marginLeft: "3px" }} />}
            </AccordionSummary>
            <AccordionDetails className="accordion_button">
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>Top Navigation
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>Top Navigation + Sidebar
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>Boxed
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>Fixed Sidebar
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>Fixed Sidebar +{" "}
                <small>Custom</small>
              </Button>
              <Typography>
                <small>Area</small>
              </Typography>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>Fixed Navbar
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>Fixed Footer
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>Collapsed Sidebar
              </Button>
            </AccordionDetails>
          </Accordion>
        </Drawer>
        <CssBaseline />
      </div>
      <div className="appbar_main">
        <AppBar
          className="app_bar"
          position="fixed"
          open={open}
          sx={{ background: "white" }}
        >
          <Toolbar className="appbar_toolbar">
            <IconButton
              className="menu_button"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              sx={{
                marginRight: 5,
                ...open,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Button className="appbar_button">Home</Button>
            <Button className="appbar_button">Contact</Button>
          </Toolbar>
        </AppBar>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          </Typography>
        </Box>
      </div>
    </Box>
  );
}
