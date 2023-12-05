import styled, { css } from "styled-components";

const InputContainerStyled = styled.form(({ theme }) => {
  const { colors, spacings } = theme;

  return css`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: ${spacings.main.s8};
    background-color: ${colors.surfaces.emailInput};
  `;
});

const InputEmaylStyled = styled.input(({ theme }) => {
  const { colors, spacings } = theme;
  return css`
    color: ${colors.text.primary};
    font-size: ${spacings.main.s8};
    padding-left: ${spacings.main.s8};
    background-color: ${colors.surfaces.emailInput};
    border: 0;
    flex-grow: 2;

    &&:focus {
      outline: none;
    }

    &&::placeholder {
      color: ${colors.text.primary};
    }
  `;
});

export { InputContainerStyled, InputEmaylStyled };
