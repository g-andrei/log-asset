import { Button, Typography } from "../../components";
import colors from "../../themes/colors";
import { isMobile } from "../../utils";
import CopyRight from "../Footer/CopyRight/CopyRight";
import {
  HeaderContainerStyled,
  MenuItem,
  MenuList,
  NavBarContainerStyled,
  ResponsiveMenu,
} from "./Header.styled";
import Link from "./Link";
import useStore from "../../store";

interface MenuItemProps {
  label: string;
  href: string;
  showDropdown?: boolean;
}

const Header = () => {
  const { openMenu, isOpen } = useStore();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Product", href: "/", showDropdown: true },
    { label: "Resource", href: "/", showDropdown: true },
    { label: "Community", href: "/" },
    { label: "Contact", href: "/" },
    { label: "About", href: "/" },
  ];

  const renderMenuItem = (item: MenuItemProps, index: number) => (
    <MenuItem key={index}>
      <Link
        variant="anchorHeader"
        href={item.href}
        label={item.label}
        showDropdown={item.showDropdown}
      />
    </MenuItem>
  );

  const renderShopButton = () => (
    <Button>
      <img src="shopIcon.svg" alt="shop icon" />
      <Typography
        variant="paragraph"
        style={{ color: `${colors.text.primary}` }}
      >
        Shop
      </Typography>
    </Button>
  );

  const toggleResponsiveMenu = () => {
    openMenu();
  };

  return (
    <>
      <HeaderContainerStyled menuOpen={isOpen}>
        <NavBarContainerStyled>
          <img src="logo.svg" alt="logo" />
          <MenuList>{!isMobile && menuItems.map(renderMenuItem)}</MenuList>

          {isMobile ? (
            <button
              style={{ background: "transparent", border: "0" }}
              onClick={toggleResponsiveMenu}
            >
              <img src="hamburgerMenu.svg" alt="menu" />
            </button>
          ) : (
            renderShopButton()
          )}
        </NavBarContainerStyled>
        <ResponsiveMenu menuOpen={isOpen}>
          <MenuList>{menuItems.map(renderMenuItem)}</MenuList>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {renderShopButton()}
            <CopyRight color={colors.surfaces.primary} />
          </div>
        </ResponsiveMenu>
      </HeaderContainerStyled>
    </>
  );
};

export default Header;
