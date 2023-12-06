import styled, { css } from "styled-components";
import { mobileBreakpoint } from "../../utils";

const FeaturesContainerStyled = styled.section(({ theme }) => {
  const { spacings, colors } = theme;
  return css`
    padding: ${spacings.main.s60} ${spacings.main.s62} ${spacings.main.s68};
    background: ${colors.surfaces.featureBackground};

    @media (max-width: ${mobileBreakpoint}) {
      padding: ${spacings.main.s30} ${spacings.main.s10} 0 ${spacings.main.s10};
    }
  `;
});

export { FeaturesContainerStyled };
