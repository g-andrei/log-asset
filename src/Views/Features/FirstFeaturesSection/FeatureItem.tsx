import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { Typography } from "../../../components";

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
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <div style={{ width: "68px" }}>
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
        <Typography variant="h3" style={{ marginBottom: "10px" }}>
          {title}
        </Typography>
        <Typography variant="paragraph">{description}</Typography>
      </div>
    </div>
  </div>
);

export default FeatureItem;
