import React, { Fragment, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Header from "../components/header";
import Sidebar from "../components/sidebar";


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    marginLeft: theme.spacing.unit * 9,
    padding: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 7,
    overflowX: "hidden"
  },
  contentShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
});

class MainLayout extends React.Component {
  state = {
    open: false
  };

  handleToggleDrawer = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };

  render() {
    const { classes, children } = this.props;
    const { state } = this.state;
    return (
      <Fragment>
        <div className={classes.root}>
          <Header
            logout={this.props.logout}
            handleToggleDrawer={this.handleToggleDrawer}
          />
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: this.state.open
            })}
          >
            {children}
          </main>
        </div>
        <Sidebar open={this.state.open} drawerWidth={drawerWidth} />
      </Fragment>
    );
  }
}

function mapState (state) {
  return {open: state.open}
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    dispatch
  );
};

export default connect(
  null,
  mapState
)(withStyles(styles)(MainLayout));
