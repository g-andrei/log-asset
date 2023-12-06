import styled, { css } from "styled-components";
import { mobileBreakpoint } from "../../../utils";

const FirstFeaturesSectionContainerStyled = styled.div(({ theme }) => {
  const { spacings } = theme;
  return css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: ${spacings.main.s16};

    @media (max-width: ${mobileBreakpoint}) {
      gap: ${spacings.main.s20};
    }
  `;
});

export { FirstFeaturesSectionContainerStyled };
