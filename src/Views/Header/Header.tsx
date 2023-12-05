import { HeaderContainerStyled, MenuItem, MenuList } from "./Header.styled";
import Link from "./Link";

const Header = () => {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Product", href: "/", showDropdown: true },
    { label: "Resource", href: "/", showDropdown: true },
    { label: "Community", href: "/" },
    { label: "Contact", href: "/" },
    { label: "About", href: "/" },
  ];

  return (
    <HeaderContainerStyled>
      <img src="logo.svg" alt="logo"></img>
      <MenuList>
        {menuItems.map((item, index) => (
          <MenuItem key={index}>
            <Link
              variant="anchorHeader"
              href={item.href}
              label={item.label}
              showDropdown={item.showDropdown}
            />
          </MenuItem>
        ))}
      </MenuList>
      <button> Shop</button>
    </HeaderContainerStyled>
  );
};

export default Header;
