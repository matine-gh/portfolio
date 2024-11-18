"use client";
import { MyHeader } from "@/components/Header";
import { Breadcrumb, Layout } from "antd";
import MyFooter from "@/components/Footer";
import { ReactNode } from "react";
import { StyleProvider } from "@ant-design/cssinjs";

export default function Container({ children }: { children: ReactNode }) {
  const { Content } = Layout;
  return (
    <StyleProvider>
      <MyHeader />
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            // background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            // borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <MyFooter />
    </StyleProvider>
  );
}
