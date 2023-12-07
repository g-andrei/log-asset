import styled, { css } from "styled-components";

export const StyledButton = styled.button(({ theme }) => {
  const { spacings, fontFamily, fontSize, colors } = theme;

  return css`
    padding: ${spacings.main.s6} ${spacings.main.s10};
    font-family: ${fontFamily.text};
    font-size: ${fontSize.text.xl};
    border: none;
    background-color: ${colors.surfaces.button};
    color: ${colors.text.primary};
    display: flex;
    gap: ${spacings.main.s6};
    justify-content: center;
  `;
});
