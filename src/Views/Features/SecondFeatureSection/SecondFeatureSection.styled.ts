import styled, { css } from "styled-components";
import { mobileBreakpoint } from "../../../utils";

const SecondFeaturesSectionContainerStyled = styled.div(({ theme }) => {
  const { spacings, colors } = theme;
  return css`
    padding: ${spacings.main.s90} ${spacings.main.s62} 0;
    background-color: ${colors.surfaces.tertiary};

    @media (max-width: ${mobileBreakpoint}) {
      padding: ${spacings.main.s50} ${spacings.main.s10} 0;
    }
  `;
});

export { SecondFeaturesSectionContainerStyled };
