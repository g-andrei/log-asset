import { Typography } from "../../components";
import { Tags } from "../../components/Typography/types";
import spacings from "../../themes/spacings";
import { isMobile } from "../../utils";

interface LinkProps {
  variant: keyof typeof Tags;
  href: string;
  label: string;
  showDropdown?: boolean;
}

const Link = ({ variant, href, label, showDropdown = false }: LinkProps) => {
  return (
    <Typography variant={variant} href={href}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: spacings.main.s4,
          justifyContent: isMobile ? "space-between" : "normal",
        }}
      >
        {label}
        {showDropdown && <img src="arrowDown.svg" alt="dropdown menu" />}
      </div>
    </Typography>
  );
};

export default Link;
