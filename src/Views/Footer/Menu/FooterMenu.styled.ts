import styled, { css } from "styled-components";
import { mobileBreakpoint } from "../../../utils";

const FooterMenuContainerStyled = styled.div(({ theme }) => {
  const { spacings, sizes, colors } = theme;
  return css`
    display: flex;
    row-gap: ${spacings.main.s32};
    flex-wrap: wrap;
    padding: ${spacings.main.s40} ${spacings.main.s114};
    height: ${sizes.main.s352};
    background: ${colors.surfaces.tertiary};

    @media (max-width: ${mobileBreakpoint}) {
      padding: ${spacings.main.s40} ${spacings.main.s10} ${spacings.main.s18};
      height: fit-content;
    }
  `;
});

export { FooterMenuContainerStyled };
