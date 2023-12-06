import styled, { css } from "styled-components";
import { mobileBreakpoint } from "../../../utils";

const FirstFeaturesSectionContainerStyled = styled.div(({ theme }) => {
  const { spacings, colors } = theme;
  return css`
    padding: ${spacings.main.s60} ${spacings.main.s62} 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: ${spacings.main.s16};
    background-color: ${colors.surfaces.featureBackground};

    @media (max-width: ${mobileBreakpoint}) {
      padding: ${spacings.main.s30} ${spacings.main.s10} 0;
      gap: ${spacings.main.s20};
    }
  `;
});

export { FirstFeaturesSectionContainerStyled };
