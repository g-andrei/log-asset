import styled, { css } from "styled-components";
import { mobileBreakpoint } from "../../utils";

const FirstSectionTestimonialsStyled = styled.div(({ theme }) => {
  const { spacings, colors } = theme;
  return css`
    padding: ${spacings.main.s72} ${spacings.main.s62} ${spacings.main.s100};
    background-color: ${colors.surfaces.tertiary};
    text-align: center;

    @media (max-width: ${mobileBreakpoint}) {
      padding: ${spacings.main.s50} ${spacings.main.s10} ${spacings.main.s140};
    }
  `;
});

const SecondSectionTestimonialsStyled = styled.div(({ theme }) => {
  const { colors, spacings } = theme;
  return css`
    background: ${colors.surfaces.secondary};
    padding: ${spacings.main.s106} ${spacings.main.s62} ${spacings.main.s44};
    position: relative;

    @media (max-width: ${mobileBreakpoint}) {
      padding: ${spacings.main.s110} ${spacings.main.s10} ${spacings.main.s40};
    }
  `;
});

const SectionStyled = styled.div(() => {
  return css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    z-index: 2;

    @media (max-width: ${mobileBreakpoint}) {
      flex-direction: column;
    }
  `;
});

const ButtonSectionStyled = styled.div(({ theme }) => {
  const { spacings } = theme;
  return css`
    display: flex;
    flex-direction: column;
    width: 24%;
    align-items: flex-end;

    @media (max-width: ${mobileBreakpoint}) {
      align-items: normal;
      margin-top: ${spacings.main.s28};
      width: 100%;
    }
  `;
});

export {
  FirstSectionTestimonialsStyled,
  SecondSectionTestimonialsStyled,
  SectionStyled,
  ButtonSectionStyled,
};
