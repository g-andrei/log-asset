import { Typography } from "../../../components";
import colors from "../../../themes/colors";
import FeatureItem from "./FeatureItem";
import { FirstFeaturesSectionContainerStyled } from "./FirstFeaturesSection.styled";

const FirstFeaturesSection: React.FC = () => (
  <FirstFeaturesSectionContainerStyled>
    <div style={{ flex: "1" }}>
      <Typography variant="h3" style={{ fontWeight: "600" }}>
        Updated Main
        <span style={{ color: colors.text.highlited }}><br/> features</span>
      </Typography>
    </div>

    <FeatureItem
      value={80}
      color="#674fbc"
      title="Quick Response"
      description="Can respond to something sensitive"
    />

    <FeatureItem
      value={90}
      color="#e4562d"
      title="Sight Sensor"
      description="Updated visibility up to 2 km"
    />
  </FirstFeaturesSectionContainerStyled>
);

export default FirstFeaturesSection;
