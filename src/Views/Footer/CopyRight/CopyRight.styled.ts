import styled, { css } from "styled-components";
import { mobileBreakpoint } from "../../../utils";

export const CopyRightContainerStyled = styled.div(({ theme }) => {
  const { spacings, colors } = theme;
  return css`
    padding: ${spacings.main.s18} 0;
    background: ${colors.surfaces.secondary};
    text-align: center;

    @media (max-width: ${mobileBreakpoint}) {
      padding: ${spacings.main.s12} 0;
    }
  `;
});
