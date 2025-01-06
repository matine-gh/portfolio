import React, { ReactNode } from "react";

export interface Page {
  // title: string;
  path: string;
  // coverSrc: string;
  cover: ReactNode;
  label: ReactNode;
  key: React.Key;
}
