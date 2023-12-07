import styled, { css } from "styled-components";
import { mobileBreakpoint } from "../../utils";

const CaruselCountainerStyled = styled.div(({ theme }) => {
  const { sizes, spacings } = theme;
  return css`
    position: absolute;
    width: ${sizes.main.s600};
    bottom: ${spacings.main.s95};
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;

    @media (max-width: ${mobileBreakpoint}) {
      bottom: ${spacings.main.s206};
      left: 0;
      transform: translate(0);
      width: 100vw;
    }

    .react-multi-carousel-track {
      gap: ${spacings.main.s10};
    }
  `;
});

export { CaruselCountainerStyled };
