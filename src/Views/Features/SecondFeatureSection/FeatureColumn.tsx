import { Typography } from "../../../components";
import sizes from "../../../themes/sizes";
import spacings from "../../../themes/spacings";

interface FeatureColumnProps {
  imgSrc: string;
  alt: string;
  title: string;
  description: string;
  linkText: string;
  linkImgSrc: string;
  linkAlt: string;
  linkColor: string;
}

const FeatureColumn = ({
  imgSrc,
  alt,
  title,
  description,
  linkText,
  linkImgSrc,
  linkAlt,
  linkColor,
}: FeatureColumnProps) => (
  <div style={{ display: "flex", gap: spacings.main.s18, flexDirection: "column" }}>
    <img src={imgSrc} alt={alt} style={{ width: sizes.main.s32 }} />
    <Typography variant="h4">{title}</Typography>
    <Typography variant="paragraph">{description}</Typography>
    <Typography variant="anchorHeader" style={{ color: linkColor }}>
      {linkText} <img src={linkImgSrc} alt={linkAlt} />
    </Typography>
  </div>
);

export default FeatureColumn;
