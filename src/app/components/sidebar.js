import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import PublicIcon from "@material-ui/icons/Public";
import FaceIcon from "@material-ui/icons/Face";
import WorkIcon from "@material-ui/icons/Work";
import PaymentIcon from "@material-ui/icons/Payment";
import BallotIcon from "@material-ui/icons/Ballot";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import FormatPaintIcon from "@material-ui/icons/FormatPaint";
import CommuteIcon from "@material-ui/icons/Commute";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import StoreIcon from "@material-ui/icons/Store";
import TodayIcon from "@material-ui/icons/Today";
import PriorityHigh from '@material-ui/icons/PriorityHigh'


import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: "fixed",
    top: theme.spacing.unit * 8,
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 8,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  }
});
export const linklist  = {
  dashboard: "/dashboard",
  setting: "/setting",
  feed: "/feed",
  drafts: "/drafts",
  create: "/create",
  login: "/login",
  detail: "/detail",
  pagenotfound: "/notfound",
  post: "/post",
  logout: "/logout",
  home: "/home",
  landing: "/",
  slug: "/:slug"
}
const Sidebar = props => {
  const { open, classes } = props;
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classNames(
          classes.drawerPaper,
          !open && classes.drawerPaperClose
        )
      }}
      open={open}
    >
      <List>
      <Link to={linklist.landing}>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Posts" />
          </ListItem>
        </Link>
        <Link to={linklist.slug}>
          <ListItem button>
            <ListItemIcon>
              <FormatPaintIcon />
            </ListItemIcon>
            <ListItemText primary="Add Slug" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

Sidebar.propTypes = {
  linklist: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Sidebar);

