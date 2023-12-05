import styled, { css } from "styled-components";

const FirstHeroContainerStyled = styled.section(({ theme }) => {
  const { spacings, colors } = theme;

  return css`
    background-color: ${colors.surfaces.primary};
    padding: ${spacings.main.s50} ${spacings.main.s62} ${spacings.main.s54};
  `;
});

const SecondaryContainerStyled = styled.section(({ theme }) => {
  const { spacings, colors } = theme;

  return css`
    background-color: ${colors.surfaces.secondary};
    padding: ${spacings.main.s28} ${spacings.main.s62};
  `;
});

const AnimationImageStyled = styled.img(({ theme }) => {
  const { spacings } = theme;

  return css`
    position: absolute;
    top: ${spacings.main.s110};
    right: -28px;
  `;
});

export {
  FirstHeroContainerStyled,
  SecondaryContainerStyled,
  AnimationImageStyled,
};
