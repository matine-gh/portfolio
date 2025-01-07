"use client";
import { MyHeader } from "@/components/Header";
import { Flex, Layout } from "antd";
import MyFooter from "@/components/Footer";
import { ReactNode } from "react";
import { StyleProvider } from "@ant-design/cssinjs";

export default function Container({ children }: { children: ReactNode }) {
  const { Content } = Layout;
  return (
    <StyleProvider>
      <Flex vertical className={"h-[100vh]"}>
        <MyHeader />
        <Content className={"p-6 flex-grow"}>
          {/*<Breadcrumb className={"m-5"}>*/}
          {/*  <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
          {/*  <Breadcrumb.Item>List</Breadcrumb.Item>*/}
          {/*  <Breadcrumb.Item>App</Breadcrumb.Item>*/}
          {/*</Breadcrumb>*/}
          {children}
        </Content>
        <MyFooter />
      </Flex>
    </StyleProvider>
  );
}
