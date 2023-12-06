import { Typography } from "../../../components";
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
        marginTop: "20px",
        display: "flex",
        gap: "14px",
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
