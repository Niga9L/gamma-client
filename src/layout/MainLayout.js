import React from "react";
import {Header} from "../containers/Header";

export const MainLayout = ({children}) => {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}