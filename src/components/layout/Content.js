import React from "react";
import { Sidebar } from "./Sidebar";
import { ShowSelectedProject } from "../ShowSelectedProject";
import { Hook } from "../../hooks";

export const Content = () => {
  return (
    <section style={{ position: 'relative', display: 'flex', backgroundColor: '#c3b831', }}>
      <div style={{
        float: 'right',
        backgroundColor: '#c3b831',
        borderRadius: '6px',
        justifyContent: 'flex-end',
        justifyItems: 'flex-end',
        width: '30%'
      }}>
        <Sidebar />
      </div>
      <div style={{
        float: 'right',
        // backgroundColor: '#607d8b',
        borderRadius: '6px',
        justifyContent: 'flex-end',
        justifyItems: 'flex-end',
        width: '80%'
      }}>
        <ShowSelectedProject />
      </div>
      <div >
        <Hook />
      </div >
    </section>
  )
}