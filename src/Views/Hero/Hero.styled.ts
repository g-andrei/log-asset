import styled, { css } from "styled-components";
import { mobileBreakpoint } from "../../utils";

const FirstHeroContainerStyled = styled.section(({ theme }) => {
  const { spacings, colors } = theme;

  return css`
    background-color: ${colors.surfaces.primary};
    padding: ${spacings.main.s50} ${spacings.main.s62} ${spacings.main.s54};

    @media (max-width: ${mobileBreakpoint}) {
      padding: 0 ${spacings.main.s10};
    }
  `;
});

const SecondaryContainerStyled = styled.section(({ theme }) => {
  const { spacings, colors } = theme;

  return css`
    background-color: ${colors.surfaces.secondary};
    padding: ${spacings.main.s28} ${spacings.main.s62};

    @media (max-width: ${mobileBreakpoint}) {
      padding: ${spacings.main.s46} ${spacings.main.s10} ${spacings.main.s30};
    }
  `;
});

const AnimationImageStyled = styled.img(({ theme }) => {
  const { spacings } = theme;

  return css`
    position: absolute;
    top: ${spacings.main.s120};
    right: -28px;

    @media (max-width: ${mobileBreakpoint}) {
      position: relative;
      right: ${spacings.main.s26};
      top: ${spacings.main.s24};
    }
  `;
});

const SecondaryTextContainerStyled = styled.div(
  () =>
    css`
      width: 40%;

      @media (max-width: ${mobileBreakpoint}) {
        width: 100%;
      }
    `
);

export {
  FirstHeroContainerStyled,
  SecondaryContainerStyled,
  AnimationImageStyled,
  SecondaryTextContainerStyled,
};
