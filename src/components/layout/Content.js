import React from "react";
import { Sidebar } from "./Sidebar";
import { ShowSelectedProject } from "../ShowSelectedProject";
import { Hook } from "../../hooks";

export const Content = () => {
  return (
    <section style={{ position: 'relative', display: 'flex', }}>
      <div style={{
        float: 'right',
        // paddingRight: '600px',
        backgroundColor: '#eb144c',
        borderRadius: '6px',
        justifyContent: 'flex-end',
        justifyItems: 'flex-end',
        width: '30%'
      }}>
        <Sidebar />
      </div>
      <div style={{
        float: 'right',
        // paddingRight: '600px',
        backgroundColor: '#607d8b',
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