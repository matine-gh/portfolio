import React, { ReactNode } from "react";

export interface Section {
  title: string;
  path: string;
  coverSrc: string;
  label?: ReactNode;
}
