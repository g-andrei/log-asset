import styled, { css } from "styled-components";
import { mobileBreakpoint } from "../../../utils";
import { CopyRightProps } from "./CopyRight";

export const CopyRightContainerStyled = styled.div<CopyRightProps>(
  ({ theme, color }) => {
    const { spacings } = theme;
    return css`
      padding: ${spacings.main.s18} 0;
      background: ${color};
      text-align: center;

      @media (max-width: ${mobileBreakpoint}) {
        padding: ${spacings.main.s12} 0;
      }
    `;
  }
);
