import { Typography } from "../../../components";
import colors from "../../../themes/colors";
import spacings from "../../../themes/spacings";

import { isMobile } from "../../../utils";
import FeatureItem from "./FeatureItem";
import {
  AnimationImageStyled,
  DecorationImageStyled,
  FirstThirdFeaturesSectionContainerStyled,
  SecondThirdFeaturesSectionContainerStyled,
} from "./ThirdFeaturesSection.styled";

const ThirdFeaturesSection = () => (
  <>
    <FirstThirdFeaturesSectionContainerStyled>
      <div
        style={{
          width: isMobile ? "100%" : "50%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography
          variant="h2"
          style={{ lineHeight: isMobile ? "14px" : "36px" }}
        >
          See how Sally's robot system works
        </Typography>
        <Typography variant="paragraph">
          Sally's robot works through voices that have been previously recorded
          to be input into the technological thinking system
        </Typography>
        <Typography
          variant="anchorHeader"
          style={{ color: colors.text.highlited }}
        >
          Read more <img src={"arrowBlueRight.svg"} alt={"arrow right"} />
        </Typography>

        <AnimationImageStyled
          src={
            isMobile
              ? "animationFeatureMobile.svg"
              : "animationFeatureDesktop.svg"
          }
          alt="animation"
        />
      </div>
    </FirstThirdFeaturesSectionContainerStyled>

    <SecondThirdFeaturesSectionContainerStyled>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ width: isMobile ? "100%" : "50%" }}>
          <Typography
            variant="h2"
            style={{
              lineHeight: isMobile ? "14px" : "36px",
              color: colors.text.primary,
              textAlign: isMobile ? "left" : "end",
            }}
          >
            How to use Sally robot to be more optimal
          </Typography>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: isMobile ? spacings.main.s28 : spacings.main.s46,
          flexDirection: isMobile ? "column" : "row",
          padding: "60px 0px 0px 0px",
          position: "relative",
          zIndex: "2",
        }}
      >
        <FeatureItem
          number="01"
          title="Keep battery Power"
          content="Maintain a healthy battery where Sally's robot doesn't run out of power quickly. This can cause the system to not run optimally"
        />
        <FeatureItem
          number="02"
          title="System Health"
          content="Maintaining cleanliness is very important to make the air circulation released by Sally's robot can be expelled smoothly. This can cause heat to the system or damage"
        />
        <FeatureItem
          number="03"
          title="Redundant System"
          content="A Sally's robot has a command capacity that is served with a minimum of 5 commands that use this excessive command causing an error in the system"
        />
      </div>

      <DecorationImageStyled
        src={
          isMobile
            ? "decorationFeaturesMobile.svg"
            : "decorationFeaturesDesktop.svg"
        }
        alt="decoration"
      />
    </SecondThirdFeaturesSectionContainerStyled>
  </>
);

export default ThirdFeaturesSection;
