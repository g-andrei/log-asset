import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { Typography } from "../../../components";
import sizes from "../../../themes/sizes";
import spacings from "../../../themes/spacings";

interface FeatureItemProps {
  value: number;
  color: string;
  title: string;
  description: string;
}

const FeatureItem = ({
  value,
  color,
  title,
  description,
}: FeatureItemProps) => (
  <div>
    <div
      style={{ display: "flex", alignItems: "center", gap: spacings.main.s12 }}
    >
      <div style={{ width: sizes.main.s68 }}>
        <CircularProgressbarWithChildren
          value={value}
          styles={{
            path: { stroke: color },
            trail: { stroke: "#d6d6d6" },
          }}
        >
          <Typography variant="h3">{`${value}%`}</Typography>
        </CircularProgressbarWithChildren>
      </div>
      <div>
        <Typography variant="h3" style={{ marginBottom: spacings.main.s10 }}>
          {title}
        </Typography>
        <Typography variant="paragraph">{description}</Typography>
      </div>
    </div>
  </div>
);

export default FeatureItem;
