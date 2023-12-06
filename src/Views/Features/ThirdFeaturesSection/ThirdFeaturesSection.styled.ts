import styled, { css } from "styled-components";
import { mobileBreakpoint } from "../../../utils";

const FirstThirdFeaturesSectionContainerStyled = styled.div(({ theme }) => {
  const { spacings, colors } = theme;
  return css`
    padding: ${spacings.main.s110} ${spacings.main.s62} ${spacings.main.s58};
    background-color: ${colors.surfaces.tertiary};
    display: flex;
    justify-content: flex-end;
    position: relative;

    @media (max-width: ${mobileBreakpoint}) {
      display: block;
      padding: ${spacings.main.s82} ${spacings.main.s10} ${spacings.main.s196};
    }
  `;
});

const SecondThirdFeaturesSectionContainerStyled = styled.div(({ theme }) => {
  const { spacings, colors } = theme;

  return css`
    padding: ${spacings.main.s68} ${spacings.main.s62};
    background-color: ${colors.surfaces.secondary};
    position: relative;

    @media (max-width: ${mobileBreakpoint}) {
      padding: ${spacings.main.s100} ${spacings.main.s10} ${spacings.main.s40};
    }
  `;
});

const AnimationImageStyled = styled.img(({ theme }) => {
  const { spacings } = theme;

  return css`
    position: absolute;
    top: ${spacings.main.s64};
    left: ${spacings.main.s44};
    z-index: 2;

    @media (max-width: ${mobileBreakpoint}) {
      top: ${spacings.main.s234};
      left: 0px;
    }
  `;
});

const DecorationImageStyled = styled.img(
  () => css`
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
  `
);

export {
  FirstThirdFeaturesSectionContainerStyled,
  SecondThirdFeaturesSectionContainerStyled,
  AnimationImageStyled,
  DecorationImageStyled,
};
