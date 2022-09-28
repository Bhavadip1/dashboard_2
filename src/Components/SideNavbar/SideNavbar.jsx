import React from "react";
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
import {
  Avatar,
  Badge,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import "./SideNavbar.css";
import AdminLTELogo from "../../Logo/AdminLTELogo.png";
import user from "../../Image/user.jpg";
import user1 from "../../Image/user1.jpg";
import user2 from "../../Image/user2.jpg";
import user3 from "../../Image/user3.jpg";
import new_logo from "../../Image/new_logo.png";
import number6 from "../../Image/number6.png";
import number2 from "../../Image/number2.png";
import { SearchOutlined } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PanoramaIcon from "@mui/icons-material/Panorama";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CircleIcon from "@mui/icons-material/Circle";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import GroupsIcon from "@mui/icons-material/Groups";
import { Dashboard1 } from "../Dashboard/Dashboard1";

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
  width: `calc(${theme.spacing(10)} + 1px)`,
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
  const [searchbarShow, setSearchbarShow] = useState(false);
  const [chatshow, setchatShow] = useState(false);
  const [notificationshow, setNotificationshow] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleSearchbarShow = () => {
    setSearchbarShow(true);
  };
  const handleSearchbarHide = () => {
    setSearchbarShow(false);
  };

  const handleChatShow = () => {
    setchatShow(true);
  };

  const handleChatHide = () => {
    setchatShow(false);
  };

  const handlernotificationshow = () => {
    setNotificationshow(true);
  };

  const handlernotificationHide = () => {
    setNotificationshow(false);
  };

  return (
    <Box sx={{ display: "flex" }} className="main">
      <div className="drawer_main">
        <Drawer
          onMouseOver={() => setOpen(true)}
          onMouseOut={() => setOpen(false)}
          className="drawer"
          variant="permanent"
          open={open}
        >
          <a className="logo_main">
            <img className="logo" src={AdminLTELogo} alt="Logo" />
            <span className={!open ? "logo-text hide" : "logo-text"}>
              AdminLTE 3
            </span>
          </a>
          <Divider className="divider_logo_buttom" />
          <a className="user_main">
            <img className="user" src={user} alt="Logo" />
            <span className={!open ? "user_text hide" : "user_text"}>
              Alexander Pierce
            </span>
          </a>
          <Divider className="divider_logo_buttom" />
          <TextField
            className={!open ? "search_bar div hide" : "search_bar"}
            variant="filled"
            id="standard-bare"
            placeholder="Search"
            InputProps={{
              endAdornment: (
                <IconButton className={!open ? "hide" : "searchbar_button"}>
                  <SearchOutlined />
                </IconButton>
              ),
            }}
          />
          <div>
            <Accordion className="accordion_dashboard">
              <AccordionSummary
                className="accordion_dashboard_summery"
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <i className="fa-solid fa-gauge-high"></i>
                <Typography className={!open ? "hide" : "typo_dashboard"}>
                  Dashboard
                </Typography>
                {
                  <ExpandMoreIcon
                    className={!open ? "hide" : "icon_expand_more"}
                    sx={{ color: "white", marginLeft: "78px" }}
                  />
                }
              </AccordionSummary>
              <AccordionDetails className="accordion_button">
                <Button className="accordion_button_sub">
                  <i className="fa-regular fa-circle"></i>
                  <span className={!open ? "hide" : "typo_menu_sub"}>
                    Dashboard v1
                  </span>
                </Button>
                <Button className="accordion_button_sub">
                  <i className="fa-regular fa-circle"></i>
                  <span className={!open ? "hide" : "typo_menu_sub"}>
                    Dashboard v2
                  </span>
                </Button>
                <Button className="accordion_button_sub">
                  <i className="fa-regular fa-circle"></i>
                  <span className={!open ? "hide" : "typo_menu_sub"}>
                    Dashboard v3
                  </span>
                </Button>
              </AccordionDetails>
            </Accordion>

            <Button className="sidenavbar_button">
              <AppsIcon />
              <span className={!open ? "hide" : "typo_menu_sub"}>Widgets</span>
              <img className="new_image_logo" src={new_logo} alt="new" />
            </Button>
          </div>

          <Accordion className="accordion_dashboard">
            <AccordionSummary
              className="accordion_dashboard_summery"
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <i class="fa-regular fa-copy"></i>
              <Typography className={!open ? "hide" : "typo_dashboard"}>
                Layout Options
              </Typography>
              <img
                className={!open ? "hide" : "image_number6"}
                src={number6}
                alt="new"
              />
              {
                <ExpandMoreIcon
                  className={!open ? "hide" : "icon_expand_more"}
                  sx={{ color: "white", marginLeft: "3px" }}
                />
              }
            </AccordionSummary>
            <AccordionDetails className="accordion_button">
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Top Navigation
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Top Navigation + Sidebar
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>Boxed</span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Fixed Sidebar
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Fixed Sidebar +<small>Custom</small>
                </span>
              </Button>
              <Typography>
                <small className={!open ? "hide" : "typo_menu_sub"}>Area</small>
              </Typography>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Fixed Navbar
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Fixed Footer
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>{" "}
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Collapsed Sidebar
                </span>
              </Button>
            </AccordionDetails>
          </Accordion>

          <Accordion className="accordion_dashboard">
            <AccordionSummary
              className="accordion_dashboard_summery"
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <i class="fa-solid fa-chart-pie"></i>
              <Typography className={!open ? "hide" : "typo_dashboard"}>
                Charts
              </Typography>
              {
                <ExpandMoreIcon
                  className={!open ? "hide" : "icon_expand_more"}
                  sx={{ color: "white", marginLeft: "51%" }}
                />
              }
            </AccordionSummary>
            <AccordionDetails className="accordion_button">
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  ChartJS
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>Flot</span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>Inline</span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>uPlot</span>
              </Button>
            </AccordionDetails>
          </Accordion>

          <Accordion className="accordion_dashboard">
            <AccordionSummary
              className="accordion_dashboard_summery"
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <i class="fa-solid fa-tree"></i>
              <Typography className={!open ? "hide" : "typo_dashboard"}>
                UI Elements
              </Typography>
              {
                <ExpandMoreIcon
                  className={!open ? "hide" : "icon_expand_more"}
                  sx={{ color: "white", marginLeft: "31%" }}
                />
              }
            </AccordionSummary>
            <AccordionDetails className="accordion_button">
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  General
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>Icons</span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Buttons
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Sliders
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Modals & Alerts
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Navbar & Tabs
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Timeline
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Ribbons
                </span>
              </Button>
            </AccordionDetails>
          </Accordion>

          <Accordion className="accordion_dashboard">
            <AccordionSummary
              className="accordion_dashboard_summery"
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <i class="fa-solid fa-pen-to-square"></i>
              <Typography className={!open ? "hide" : "typo_dashboard"}>
                Forms
              </Typography>
              {
                <ExpandMoreIcon
                  className={!open ? "hide" : "icon_expand_more"}
                  sx={{ color: "white", marginLeft: "53%" }}
                />
              }
            </AccordionSummary>
            <AccordionDetails className="accordion_button">
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  General Elements
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Advanced Elements
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Editors
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Validation
                </span>
              </Button>
            </AccordionDetails>
          </Accordion>

          <Accordion className="accordion_dashboard">
            <AccordionSummary
              className="accordion_dashboard_summery"
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <i class="fa-solid fa-table"></i>
              <Typography className={!open ? "hide" : "typo_dashboard"}>
                Tables
              </Typography>
              {
                <ExpandMoreIcon
                  className={!open ? "hide" : "icon_expand_more"}
                  sx={{ color: "white", marginLeft: "51%" }}
                />
              }
            </AccordionSummary>
            <AccordionDetails className="accordion_button">
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Simple Tables
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  DataTables
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>jsGrid</span>
              </Button>
            </AccordionDetails>
          </Accordion>

          <Typography className={!open ? "hide" : "typo_examples"}>
            EXAMPLES
          </Typography>

          <Button className="sidenavbar_button">
            <CalendarMonthIcon />
            <span className={!open ? "hide" : "typo_menu_sub"}>Calendar</span>
            <img
              className={!open ? "hide" : "image_number2"}
              src={number2}
              alt="new"
            />
          </Button>
          <Button className="sidenavbar_button">
            <PanoramaIcon />
            <span className={!open ? "hide" : "typo_menu_sub"}>Gallery</span>
          </Button>
          <Button className="sidenavbar_button">
            <i className="fa-solid fa-table-columns icon_column "></i>
            <span className={!open ? "hide" : "typo_menu_sub"}>
              Kanban Board
            </span>
          </Button>

          <Accordion className="accordion_dashboard">
            <AccordionSummary
              className="accordion_dashboard_summery"
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <i class="fa-regular fa-envelope"></i>
              <Typography className={!open ? "hide" : "typo_dashboard"}>
                Mailbox
              </Typography>
              {
                <ExpandMoreIcon
                  className={!open ? "hide" : "icon_expand_more"}
                  sx={{ color: "white", marginLeft: "45%" }}
                />
              }
            </AccordionSummary>
            <AccordionDetails className="accordion_button">
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>Inbox</span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Compose
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>Read</span>
              </Button>
            </AccordionDetails>
          </Accordion>

          <Accordion className="accordion_dashboard">
            <AccordionSummary
              className="accordion_dashboard_summery"
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <i class="fa-solid fa-book"></i>
              <Typography className={!open ? "hide" : "typo_dashboard"}>
                Pages
              </Typography>
              {
                <ExpandMoreIcon
                  className={!open ? "hide" : "icon_expand_more"}
                  sx={{ color: "white", marginLeft: "50%" }}
                />
              }
            </AccordionSummary>
            <AccordionDetails className="accordion_button">
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Invoice
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Profile
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  E-commerce
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Projects
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  ProjectsAdd
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  ProjectsEdit
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Projects Detail
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Contacts
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>FAQ</span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Contact us
                </span>
              </Button>
            </AccordionDetails>
          </Accordion>

          <Accordion className="accordion_dashboard">
            <AccordionSummary
              className="accordion_dashboard_summery"
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <i class="fa-regular fa-square-plus"></i>
              <Typography className={!open ? "hide" : "typo_dashboard"}>
                Extras
              </Typography>
              {
                <ExpandMoreIcon
                  className={!open ? "hide" : "icon_expand_more"}
                  sx={{ color: "white", marginLeft: "50%" }}
                />
              }
            </AccordionSummary>

            <Accordion className="accordion_dashboard">
              <AccordionSummary
                className="accordion_dashboard_summery"
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <i className="fa-regular fa-circle"></i>
                <Typography className={!open ? "hide" : "typo_dashboard"}>
                  Login & Registerv1
                </Typography>
                {
                  <ExpandMoreIcon
                    className={!open ? "hide" : "icon_expand_more"}
                    sx={{ color: "white", marginLeft: "5%" }}
                  />
                }
              </AccordionSummary>
              <AccordionDetails className="accordion_button">
                <Button className="accordion_button_sub">
                  <i className="fa-regular fa-circle"></i>
                  <span className={!open ? "hide" : "typo_menu_sub"}>
                    Login v1
                  </span>
                </Button>
                <Button className="accordion_button_sub">
                  <i className="fa-regular fa-circle"></i>
                  <span className={!open ? "hide" : "typo_menu_sub"}>
                    Register v1
                  </span>
                </Button>
                <Button className="accordion_button_sub">
                  <i className="fa-regular fa-circle"></i>
                  <span className={!open ? "hide" : "typo_menu_sub"}>
                    Forgot Password v1
                  </span>
                </Button>
                <Button className="accordion_button_sub">
                  <i className="fa-regular fa-circle"></i>
                  <span className={!open ? "hide" : "typo_menu_sub"}>
                    Recover Password v1
                  </span>
                </Button>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion_dashboard">
              <AccordionSummary
                className="accordion_dashboard_summery"
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <i className="fa-regular fa-circle"></i>
                <Typography className={!open ? "hide" : "typo_dashboard"}>
                  Login & Registerv2
                </Typography>
                {
                  <ExpandMoreIcon
                    className={!open ? "hide" : "icon_expand_more"}
                    sx={{ color: "white", marginLeft: "5%" }}
                  />
                }
              </AccordionSummary>
              <AccordionDetails className="accordion_button">
                <Button className="accordion_button_sub">
                  <i className="fa-regular fa-circle"></i>
                  <span className={!open ? "hide" : "typo_menu_sub"}>
                    Login v2
                  </span>
                </Button>
                <Button className="accordion_button_sub">
                  <i className="fa-regular fa-circle"></i>
                  <span className={!open ? "hide" : "typo_menu_sub"}>
                    Register v2
                  </span>
                </Button>
                <Button className="accordion_button_sub">
                  <i className="fa-regular fa-circle"></i>
                  <span className={!open ? "hide" : "typo_menu_sub"}>
                    Forgot Password v2
                  </span>
                </Button>
                <Button className="accordion_button_sub">
                  <i className="fa-regular fa-circle"></i>
                  <span className={!open ? "hide" : "typo_menu_sub"}>
                    Recover Password v2
                  </span>
                </Button>
              </AccordionDetails>
            </Accordion>

            <AccordionDetails className="accordion_button">
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Lockscreen
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Legacy User Menu
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Language Menu
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Error 404
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Error 500
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>Pace</span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Blank Page
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Starter Page
                </span>
              </Button>
            </AccordionDetails>
          </Accordion>

          <Accordion className="accordion_dashboard">
            <AccordionSummary
              className="accordion_dashboard_summery"
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
              <Typography className={!open ? "hide" : "typo_dashboard"}>
                Search
              </Typography>
              {
                <ExpandMoreIcon
                  className={!open ? "hide" : "icon_expand_more"}
                  sx={{ color: "white", marginLeft: "47%" }}
                />
              }
            </AccordionSummary>
            <AccordionDetails className="accordion_button">
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Simple Search
                </span>
              </Button>
              <Button className="accordion_button_sub">
                <i className="fa-regular fa-circle"></i>
                <span className={!open ? "hide" : "typo_menu_sub"}>
                  Enhanced
                </span>
              </Button>
            </AccordionDetails>
          </Accordion>

          <Typography className={!open ? "hide" : "typo_examples"}>
            MISCELLANEOUS
          </Typography>

          <Button className="sidenavbar_button">
            <MoreHorizIcon />
            <span className={!open ? "hide" : "typo_menu_sub"}>
              Tabbed IFrame Plugin
            </span>
          </Button>
          <Button className="sidenavbar_button">
            <InsertDriveFileIcon />
            <span className={!open ? "hide" : "typo_menu_sub"}>
              Documentation
            </span>
          </Button>

          <Typography className={!open ? "hide" : "typo_examples"}>
            MULTI LEVEL EXAMPLE
          </Typography>

          <Button className="sidenavbar_button">
            <CircleIcon />
            <span className={!open ? "hide" : "typo_menu_sub"}>Level 1</span>
          </Button>

          <Accordion className="accordion_dashboard level1">
            <AccordionSummary
              className="accordion_dashboard_summery"
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <CircleIcon />
              <Typography className={!open ? "hide" : "typo_dashboard"}>
                Level 1
              </Typography>
              {
                <ExpandMoreIcon
                  className={!open ? "hide" : "icon_expand_more"}
                  sx={{ color: "white", marginLeft: "45%" }}
                />
              }
            </AccordionSummary>

            <Button className="accordion_button_sub">
              <i className="fa-regular fa-circle"></i>
              <span className={!open ? "hide" : "typo_menu_sub"}>Level 2</span>
            </Button>
            <Accordion className="accordion_dashboard">
              <AccordionSummary
                className="accordion_dashboard_summery"
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <i className="fa-regular fa-circle"></i>
                <Typography className={!open ? "hide" : "typo_dashboard"}>
                  Level 2
                </Typography>
                {
                  <ExpandMoreIcon
                    className={!open ? "hide" : "icon_expand_more"}
                    sx={{ color: "white", marginLeft: "38%" }}
                  />
                }
              </AccordionSummary>
              <AccordionDetails className="accordion_button">
                <Button className="accordion_button_sub">
                  <i class="fa-regular fa-circle-dot"></i>
                  <span className={!open ? "hide" : "typo_menu_sub"}>
                    Level 3
                  </span>
                </Button>
                <Button className="accordion_button_sub">
                  <i class="fa-regular fa-circle-dot"></i>
                  <span className={!open ? "hide" : "typo_menu_sub"}>
                    Level 3
                  </span>
                </Button>
                <Button className="accordion_button_sub">
                  <i class="fa-regular fa-circle-dot"></i>
                  <span className={!open ? "hide" : "typo_menu_sub"}>
                    Level 3
                  </span>
                </Button>
              </AccordionDetails>
            </Accordion>
            <Button className="accordion_button_sub">
              <i className="fa-regular fa-circle"></i>
              <span className={!open ? "hide" : "typo_menu_sub"}>Level 2</span>
            </Button>
          </Accordion>

          <Button className="sidenavbar_button">
            <CircleIcon />
            <span className={!open ? "hide" : "typo_menu_sub"}>Level 1</span>
          </Button>

          <Typography className={!open ? "hide" : "typo_examples"}>
            LABELS
          </Typography>
          <Button className="sidenavbar_button">
            <i class="nav-icon far fa-circle text-danger"></i>
            <span className={!open ? "hide" : "typo_menu_sub"}>Important</span>
          </Button>
          <Button className="sidenavbar_button">
            <i class="nav-icon far fa-circle text-warning"></i>
            <span className={!open ? "hide" : "typo_menu_sub"}>Warning</span>
          </Button>
          <Button className="sidenavbar_button">
            <i class="nav-icon far fa-circle text-info"></i>
            <span className={!open ? "hide" : "typo_menu_sub"}>
              Informational
            </span>
          </Button>
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
            <div>
              <IconButton
                className={searchbarShow ? "hide" : "menu_button"}
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
              <Button className={searchbarShow ? "hide" : "appbar_button"}>
                Home
              </Button>
              <Button className={searchbarShow ? "hide" : "appbar_button"}>
                Contact
              </Button>
            </div>
            <TextField
              className={!searchbarShow ? "hide" : "search_textfield"}
              id="input-with-icon-textfield"
              placeholder="Search"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                    <Button
                      className="closeicon_button"
                      onClick={handleSearchbarHide}
                    >
                      <CloseIcon />
                    </Button>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <div className="app_bar_icon_btn">
              <Button
                className={searchbarShow ? "hide" : "appbar_button right"}
                onClick={handleSearchbarShow}
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </Button>
              <Button
                className={searchbarShow ? "hide" : "appbar_button right"}
                onClick={handleChatShow}
              >
                <Badge className="badge_notificationicon" badgeContent={4}>
                  <i class="fa-regular fa-comments"></i>
                </Badge>
              </Button>
              <Button
                className={searchbarShow ? "hide" : "appbar_button right"}
                onClick={handlernotificationshow}
              >
                <Badge
                  className="badge_notificationicon_bell"
                  badgeContent={15}
                >
                  <i class="fa-regular fa-bell"></i>
                </Badge>
              </Button>
              <Button
                className={searchbarShow ? "hide" : "appbar_button right"}
              >
                <i class="fa-solid fa-maximize"></i>
              </Button>
              <Button
                className={searchbarShow ? "hide" : "appbar_button right"}
              >
                <i class="fas fa-th-large"></i>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <List
          className={!chatshow ? "hide" : "list_bar"}
          sx={{
            position: "absolute",
            right: "153px",
            width: "100%",
            maxWidth: 300,
            bgcolor: "background.paper",
            border: "1px solid rgba(0,0,0,.15)",
            zIndex: "1000",
            boxShadow: "0 0.5rem 1rem rgb(0 0 0 / 18%)",
          }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <img className="list_user" src={user1} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Brad Diesel"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Call me whenever you can...
                  </Typography>
                  <Typography className="typo_card_buttom">
                    <AccessTimeIcon className="time_icon" />4 Hours Ago
                  </Typography>
                </React.Fragment>
              }
            />
            <ListItemIcon>
              <StarIcon className="list_item_icon" />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <img className="list_user" src={user2} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="John Pierce"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    I got your message bro
                  </Typography>
                  <Typography className="typo_card_buttom">
                    <AccessTimeIcon className="time_icon" />4 Hours Ago
                  </Typography>
                </React.Fragment>
              }
            />
            <ListItemIcon>
              <StarIcon className="list_item_icon second_list_item" />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <img className="list_user" src={user3} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Nora Silvester"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    The subject goes here
                  </Typography>
                  <Typography className="typo_card_buttom">
                    <AccessTimeIcon className="time_icon" />4 Hours Ago
                  </Typography>
                </React.Fragment>
              }
            />
            <ListItemIcon>
              <StarIcon className="list_item_icon third_list_item" />
            </ListItemIcon>
          </ListItem>
          <Button className="list_btn_bottum">See All Messages</Button>
        </List>

        <List
          className={!notificationshow ? "hide" : "notification_list_bar"}
          sx={{
            position: "absolute",
            right: "117px",
            width: "100%",
            maxWidth: 300,
            bgcolor: "background.paper",
            border: "1px solid rgba(0,0,0,.15)",
            zIndex: "1000",
            boxShadow: "0 0.5rem 1rem rgb(0 0 0 / 18%)",
          }}
        >
          <Typography className="list_head">See All Messages</Typography>
          <Divider />
          <ListItem>
            <ListItemIcon className="notification_list_item">
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary=" 4 new messages" />
            <ListItemText className="notification_text" secondary="4 mins" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon className="notification_list_item">
              <GroupsIcon />
            </ListItemIcon>
            <ListItemText primary=" 8 friend requests" />
            <ListItemText className="notification_text" secondary="12 hours" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon className="notification_list_item">
              <InsertDriveFileIcon />
            </ListItemIcon>
            <ListItemText primary=" 3 new reports" />
            <ListItemText className="notification_text" secondary="2 days" />
          </ListItem>
          <Divider />
          <Button className="list_btn_bottum">See All Messages</Button>
        </List>

        <Box component="main" className="box_main">
          <Dashboard1 />
        </Box>
      </div>
    </Box>
  );
}
