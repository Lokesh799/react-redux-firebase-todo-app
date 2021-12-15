import React from "react";
import { Sidebar } from "./Sidebar";
import { ShowSelectedProject } from "../ShowSelectedProject";
import { Hook } from "../../hooks";

export const Content = () => {
  return (
    <section>
      <Sidebar />
      <ShowSelectedProject/>
      <Hook/>

    </section>
  )
}