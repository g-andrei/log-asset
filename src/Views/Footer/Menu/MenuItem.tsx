import { Typography } from "../../../components";
import spacings from "../../../themes/spacings";
import { isMobile } from "../../../utils";

interface MenuItemProps {
  title: string;
  items: string[];
}

const MenuItem = ({ title, items }: MenuItemProps) => (
  <div
    style={{
      width: isMobile ? "50%" : "20%",
      height: "fit-content",
    }}
  >
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

export default MenuItem;
