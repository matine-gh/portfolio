"use client";
import { Layout, Menu } from "antd";
import { pages } from "@/lib";
import React from "react";

const { Header } = Layout;

export const MyHeader = () => {
  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        items={pages}
        style={{ flex: 1, minWidth: 0, color: "red" }}
      />
    </Header>
  );
};
