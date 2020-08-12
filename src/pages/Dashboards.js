import React from "react";
import {Tabs} from "../containers/Tabs";
import {Desktop} from "../containers/Desktop";
import {AddWidget} from "../components/AddWidget";
import {DashboardBox} from "../styled/Desktop";

export const Dashboards = () => {
  return (
    <DashboardBox>
      <Tabs/>
      <Desktop/>
      <AddWidget/>
    </DashboardBox>
  )
}