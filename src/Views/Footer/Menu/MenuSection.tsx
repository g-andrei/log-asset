import { Typography } from "../../../components";
import spacings from "../../../themes/spacings";
import { isMobile } from "../../../utils";

interface MenuSectionProps {
  title: string;
  items: string[];
}
const MenuSection = ({ title, items }: MenuSectionProps) => (
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
      {items.map((item: string, index) => (
        <Typography key={index} variant="anchorFooter">
          {item}
        </Typography>
      ))}
    </div>
  </div>
);

export default MenuSection;
