"use client";
import { Button, Layout } from "antd";

export default function MyFooter() {
  const { Footer } = Layout;
  return (
    <Footer className={"text-center w-full"}>
      ©{new Date().getFullYear()} Matineh Ghazanfari. All Rights Reserved.
      <p>
        Looking to get in touch?{" "}
        <a href="/contact-me" className="text-blue-400">
          Contact Me
        </a>
      </p>
      <Button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Back to Top ↑
      </Button>
    </Footer>
  );
}
