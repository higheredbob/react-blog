import React from 'react'
import { Route, Link } from 'react-router-dom'
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

const Routes = () => (
  <div>
    <main>
      <DashboardRoute exact path="/" component={Post} />
      <DashboardRoute exact path="/:slug" component={Slug} />
    </main>
  </div>
)

export default Routes
