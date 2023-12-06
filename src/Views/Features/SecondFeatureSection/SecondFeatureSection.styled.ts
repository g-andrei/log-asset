import styled, { css } from "styled-components";
import { mobileBreakpoint } from "../../../utils";

const SecondFeaturesSectionContainerStyled = styled.div(({ theme }) => {
  const { spacings } = theme;
  return css`
    padding-top: ${spacings.main.s90};

    @media (max-width: ${mobileBreakpoint}) {
      padding-top: ${spacings.main.s50};
    }
  `;
});

export { SecondFeaturesSectionContainerStyled };
