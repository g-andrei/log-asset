import styled, { css } from "styled-components";

export const CopyRightContainerStyled = styled.div(({ theme }) => {
  const { spacings, colors } = theme;
  return css`
    padding: ${spacings.main.s18};
    background: ${colors.surfaces.secondary};
    text-align: center;
  `;
});
