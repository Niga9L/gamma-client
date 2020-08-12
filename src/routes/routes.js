import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import {MainLayout} from "../layout/MainLayout";
import {Dashboards} from "../pages/Dashboards";
import {AuthPage} from "../pages/AuthPage";

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path='/' exact>
          <MainLayout>
            <Dashboards/>
          </MainLayout>
        </Route>
        <Redirect to='/'/>
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path='/auth' exact>
        <AuthPage/>
      </Route>
      <Redirect to='/auth'/>
    </Switch>
  )
}