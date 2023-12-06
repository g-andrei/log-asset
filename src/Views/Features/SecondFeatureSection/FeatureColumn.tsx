import { Typography } from "../../../components";

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
  <div style={{ display: "flex", gap: "18px", flexDirection: "column" }}>
    <img src={imgSrc} alt={alt} style={{ width: "32px" }} />
    <Typography variant="h4">{title}</Typography>
    <Typography variant="paragraph">{description}</Typography>
    <Typography variant="anchorHeader" style={{ color: linkColor }}>
      {linkText} <img src={linkImgSrc} alt={linkAlt} />
    </Typography>
  </div>
);

export default FeatureColumn;
