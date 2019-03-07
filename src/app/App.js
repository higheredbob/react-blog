import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Post from './containers/Post'
import Slug from './containers/Slug'
import MainLayout from './layouts/MainLayout'

const DashboardRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  );
};

class App extends Component {

  render() {
    const { settings } = this.props;

    return (
      <div>
        <MuiThemeProvider theme={settings.theme}>
          <CssBaseline />
            <Router>
                  <Switch>
                    <DashboardRoute exact path="/" component={Post} />
                    <DashboardRoute exact path="/:slug" component={Slug} />
                  </Switch>
            </Router>
        </MuiThemeProvider>
      </div>
        )
    }
}

App.propTypes = {};

const mapStateToProps = state => {
  return {
    settings: state.settings,
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
