import { Typography } from "../../../components";
import colors from "../../../themes/colors";
import { isMobile } from "../../../utils";
import { SecondFeaturesSectionContainerStyled } from "./SecondFeatureSection.styled";
import FeatureColumn from "./FeatureColumn";

const SecondFeatureSection = () => {
  return (
    <SecondFeaturesSectionContainerStyled>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "18px" : "146px",
        }}
      >
        <div>
          <Typography variant="h2">See the latest updated version</Typography>
        </div>
        <div style={{ width: isMobile ? "100%" : "60%" }}>
          <Typography variant="paragraph">
            Update your system to the latest
            <span style={{ color: colors.text.highlited }}>version 2.3</span>
            with a technology version using the new RTX-1134 processor for a
            <span style={{ color: colors.text.highlited }}>
              much better experience
            </span>
          </Typography>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "52px" : "58px",
          padding: isMobile ? "54px 10px 0" : "54px 20px 0",
        }}
      >
        <FeatureColumn
          imgSrc="bateryFeature.svg"
          alt="battery charging"
          title="Using 25,000 Mah battery"
          description="Sally's robot can last up to a week and uses the BT 331 Gold series fast charging which can be charged for 30 minutes"
          linkText="Read More"
          linkImgSrc="arrowOrangeRight.svg"
          linkAlt="read more"
          linkColor={colors.text.headline}
        />

        <FeatureColumn
          imgSrc="aiIcon.svg"
          alt="human thinking"
          title="Human Thinking technology"
          description="Sally's modified robot can think like a human using IEA 223 technology with the Z364XT thinking system"
          linkText="Read More"
          linkImgSrc="arrowOrangeRight.svg"
          linkAlt="read more"
          linkColor={colors.text.highlited}
        />

        <FeatureColumn
          imgSrc="pulseIcon.svg"
          alt="pulse"
          title="Quick Response In all Orders"
          description="Technology connects listeners using a microphone IC 2469 KG with a response speed of 0.3 seconds"
          linkText="Read More"
          linkImgSrc="arrowOrangeRight.svg"
          linkAlt="read more"
          linkColor={colors.text.headline}
        />
      </div>
    </SecondFeaturesSectionContainerStyled>
  );
};

export default SecondFeatureSection;
