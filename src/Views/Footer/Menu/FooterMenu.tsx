import React from "react";
import { Typography } from "../../../components";
import { isMobile } from "../../../utils";
import { FooterMenuContainerStyled } from "./FooterMenu.styled";
import spacings from "../../../themes/spacings";

interface FooterMenuProps {}

interface MenuItemProps {
  title: string;
  items: string[];
}

const MenuItem = ({ title, items }: MenuItemProps) => (
  <div style={{ width: isMobile ? "50%" : "20%" }}>
    <Typography variant="h4">{title}</Typography>
    <div
      style={{
        marginTop: spacings.main.s20,
        display: "flex",
        gap: spacings.main.s14,
        flexDirection: "column",
      }}
    >
      {items.map((item, index) => (
        <Typography key={index} variant="anchorFooter">
          {item}
        </Typography>
      ))}
    </div>
  </div>
);

const FooterMenu: React.FC<FooterMenuProps> = () => {
  return (
    <FooterMenuContainerStyled>
      <MenuItem
        title="Menu"
        items={[
          "Home",
          "Product",
          "Resources",
          "Community",
          "Contact",
          "About",
        ]}
      />

      <MenuItem
        title="Product"
        items={["Robot", "System Ai", "Stream", "DNC"]}
      />

      <MenuItem
        title="Solutions"
        items={["System Error", "Video Delivery", "Payment", "Processing"]}
      />

      <MenuItem
        title="FAQ"
        items={[
          "Account",
          "Manage Deliveries",
          "Orders",
          "Payments",
          "Copyright",
          "Language",
        ]}
      />

      <MenuItem
        title="Support"
        items={["Online Chat", "Open Live Chat", "Call Center"]}
      />

      <div
        style={{
          width: isMobile ? "0%" : "40%",
          display: isMobile ? "none" : "block",
          position: "relative",
          bottom: spacings.main.s14,
          right: spacings.main.s114,
        }}
      >
        <img src="decorationFooter.svg" alt="decoration footer" />
      </div>

      <MenuItem
        title="Developers"
        items={["Developers Hub", "Developers Call", "API"]}
      />

      <MenuItem
        title="Resources"
        items={["System Network", "Company Service", "Assist AI"]}
      />

      <div
        style={{
          width: isMobile ? "50%" : "20%",
          position: "relative",
          bottom: isMobile ? "-22px" : spacings.main.s67,
          right: isMobile ? spacings.main.s6 : spacings.main.s34,
        }}
      >
        <img
          src={
            isMobile
              ? "animationFooterMobile.svg"
              : "animationFooterDesktop.svg"
          }
          alt="animation footer"
        />
      </div>
    </FooterMenuContainerStyled>
  );
};

export default FooterMenu;
