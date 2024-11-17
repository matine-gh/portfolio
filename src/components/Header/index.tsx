"use client";
import { Layout, Menu } from "antd";
import { ItemType } from "antd/es/menu/interface";
import Link from "next/link";

const { Header } = Layout;

function generateLink(label: string, path: string) {
  return <Link href={path}>{label}</Link>;
}

export const MyHeader = () => {
  let items: ItemType[] = [
    { key: "home", label: generateLink("Home", "/") },
    {
      key: "about-me",
      label: generateLink("About Me", "/about-me"),
    },
    {
      key: "projects",
      label: generateLink("Projects", "/projects"),
    },
    { key: "skills", label: generateLink("Skills", "/skills") },
    {
      key: "contact-me",
      label: generateLink("Contact Me", "/contact-me"),
    },
  ];
  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        // defaultSelectedKeys={["2"]}
        items={items}
        style={{ flex: 1, minWidth: 0 }}
      />
    </Header>
  );
};
