import styled, { css } from "styled-components";
import { mobileBreakpoint } from "../../utils";

interface ResponsiveMenuProps {
  menuOpen: boolean;
}
const HeaderContainerStyled = styled.header<ResponsiveMenuProps>(
  ({ theme, menuOpen }) => {
    const { spacings, colors } = theme;
    return css`
      background-color: ${colors.surfaces.primary};
      padding: ${spacings.main.s10} ${spacings.main.s62};

      @media (max-width: ${mobileBreakpoint}) {
        padding: ${spacings.main.s8} ${spacings.main.s10};
        width: 100vw;
        height: ${menuOpen ? "100vh" : "unset"};
      }
    `;
  }
);

const NavBarContainerStyled = styled.div(() => {
  return css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${mobileBreakpoint}) {
    }
  `;
});

const MenuList = styled.ul(({ theme }) => {
  const { spacings } = theme;
  return css`
    display: flex;
    gap: ${spacings.main.s20};

    @media (max-width: ${mobileBreakpoint}) {
      flex-direction: column;
    }
  `;
});

const ResponsiveMenu = styled.div<ResponsiveMenuProps>(
  ({ theme, menuOpen }) => {
    const { colors, spacings, sizes } = theme;

    return css`
      display: none;

      @media (max-width: ${mobileBreakpoint}) {
        background: ${colors.surfaces.primary};
        position: relative;
        display: ${menuOpen && "flex"};
        flex-direction: column;
        justify-content: space-between;
        padding: ${spacings.main.s22} ${spacings.main.s10} 0;
        height: ${sizes.main.s374};
      }
    `;
  }
);

const MenuItem = styled.li(
  () =>
    css`
      cursor: pointer;
    `
);

export {
  HeaderContainerStyled,
  NavBarContainerStyled,
  MenuList,
  MenuItem,
  ResponsiveMenu,
};
