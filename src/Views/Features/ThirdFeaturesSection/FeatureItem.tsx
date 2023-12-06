import { Typography } from "../../../components";
import colors from "../../../themes/colors";
import spacings from "../../../themes/spacings";
import { isMobile } from "../../../utils";

interface FeatureItemProps {
  number: string;
  title: string;
  content: string;
}

const FeatureItem = ({ number, title, content }: FeatureItemProps) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: isMobile ? spacings.main.s8 : spacings.main.s16,
    }}
  >
    <Typography variant="h3" style={{ color: colors.text.headline }}>
      {number}.
    </Typography>
    <Typography variant="h4" style={{ color: colors.text.primary }}>
      {title}
    </Typography>
    <Typography variant="paragraph" style={{ color: colors.text.primary }}>
      {content}
    </Typography>
  </div>
);

export default FeatureItem;
