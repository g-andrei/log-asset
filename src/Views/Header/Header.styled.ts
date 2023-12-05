import styled, { css } from "styled-components";

const HeaderContainerStyled = styled.header(({ theme }) => {
  const { spacings, colors } = theme;
  return css`
    background-color: ${colors.surfaces.primary};
    padding: ${spacings.main.s10} ${spacings.main.s62};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
});

const MenuList = styled.ul(({ theme }) => {
  const { spacings } = theme;
  return css`
    display: flex;
    gap: ${spacings.main.s20};
  `;
});

const MenuItem = styled.li(
  () =>
    css`
      cursor: pointer;
    `
);

export { HeaderContainerStyled, MenuList, MenuItem };
