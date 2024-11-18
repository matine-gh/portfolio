import React, { ReactNode } from "react";
import Link from "next/link";

class Page {
  title: string;
  path: string;
  coverImageSrc: string;
  label: ReactNode;
  key: React.Key;

  constructor(input: {
    title: string;
    path: string;
    coverImageSrc: string;
    label?: ReactNode;
  }) {
    this.title = input.title;
    this.path = input.path;
    this.label = <Link href={this.path}>{this.title}</Link>;
    this.coverImageSrc = input.coverImageSrc;
    this.key = input.title;
  }
}

export default Page;
