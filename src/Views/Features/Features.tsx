import { FeaturesContainerStyled } from "./Features.styled";
import FirstFeaturesSection from "./FirstFeaturesSection/FirstFeaturesSection";
import SecondFeatureSection from "./SecondFeatureSection/SecondFeatureSection";

const Features = () => {
  return (
    <FeaturesContainerStyled>
      <FirstFeaturesSection />
      <SecondFeatureSection />
    </FeaturesContainerStyled>
  );
};

export default Features;
