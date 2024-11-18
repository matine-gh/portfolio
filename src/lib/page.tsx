import React, { ReactNode } from "react";
import Link from "next/link";

class Page {
  title: string;
  path: string;
  coverSrc: string;
  cover: ReactNode;
  label: ReactNode;
  key: React.Key;

  constructor(input: {
    title: string;
    path: string;
    coverSrc: string;
    label?: ReactNode;
  }) {
    this.title = input.title;
    this.path = input.path;
    this.coverSrc = input.coverSrc;
    this.label = <Link href={this.path}>{this.title}</Link>;
    this.cover = (
      <img alt={`${this.title} Page Cover Image`} src={input.coverSrc} />
    );
    this.key = input.title;
  }
}

export default Page;
