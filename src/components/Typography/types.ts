import { ReactNode } from "react";

export enum Tags {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  paragraph = "p",
  anchorHeader = "a",
  anchorFooter = "a",
}

export enum BreakPoints {
  Desktop = "desktop",
  Mobile = "mobile",
}

export type TypograpyProps = {
  variant: keyof typeof Tags;
  children: ReactNode;
  textTransform?: string;
  style?: React.CSSProperties;
};

export interface StyledTypographyProps {
  variant: keyof typeof Tags;
}
