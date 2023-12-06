import { EmailTextBox, Typography } from "../../components";
import spacings from "../../themes/spacings";
import { isMobile } from "../../utils";

import {
  AnimationImageStyled,
  FirstHeroContainerStyled,
  SecondaryContainerStyled,
  SecondaryTextContainerStyled,
} from "./Hero.styled";

const Hero = () => {
  return (
    <>
      <FirstHeroContainerStyled>
        <div
          style={
            isMobile ? { display: "flex" } : { display: "flex", width: "66%" }
          }
        >
          <div style={isMobile ? { width: "100%" } : {}}>
            <Typography
              variant="h1"
              style={{
                textTransform: "uppercase",
                fontWeight: "800",
                lineHeight: isMobile ? spacings.main.s22 : spacings.main.s40,
              }}
            >
              make your personality into technology.
            </Typography>

            <div style={isMobile ? {} : { width: "64%" }}>
              <Typography
                variant="paragraph"
                style={{
                  lineHeight: spacings.main.s14,
                  marginTop: spacings.main.s20,
                  marginBottom: spacings.main.s30,
                }}
              >
                Robot technology is faster with the latest systems that make it
                possible your partner and ready to serve your needs. EnttTer
                email to get product launch information
              </Typography>
              <EmailTextBox />
              <div
                style={
                  isMobile
                    ? {
                        display: "flex",
                        gap: spacings.main.s30,
                        marginTop: spacings.main.s32,
                      }
                    : {
                        width: "66%",
                        display: "flex",
                        gap: spacings.main.s30,
                        marginTop: spacings.main.s32,
                      }
                }
              >
                <div style={{ textAlign: "center" }}>
                  <img src="rtxIcon.svg" alt="rtx-1134" />
                  <Typography
                    variant="paragraph"
                    style={{ color: "white", marginTop: spacings.main.s10 }}
                  >
                    Using the
                    <span style={{ fontWeight: "bold" }}>
                      RTX-1134
                      <br />
                    </span>
                    procesor
                  </Typography>
                </div>
                <div style={{ textAlign: "center" }}>
                  <img src="platinumIcon.svg" alt="platinum-2.14" />
                  <Typography
                    variant="paragraph"
                    style={{ color: "white", marginTop: spacings.main.s10 }}
                  >
                    Useinfrared
                    <span style={{ fontWeight: "bold" }}>
                      <br /> Platinum 2.14
                    </span>
                  </Typography>
                </div>
              </div>
              <AnimationImageStyled
                src={
                  isMobile
                    ? "animationHeroMobile.svg"
                    : "animationHeroDesktop.svg"
                }
                alt="animation"
              />
            </div>
          </div>
        </div>
      </FirstHeroContainerStyled>

      <SecondaryContainerStyled>
        <SecondaryTextContainerStyled>
          <Typography variant="h3" style={{ color: "#e56c38" }}>
            1500+ Clients
          </Typography>
          <Typography
            variant="h5"
            style={{ color: "#fff", marginTop: spacings.main.s14 }}
          >
            Various clients around the world who have used our products
          </Typography>
        </SecondaryTextContainerStyled>
      </SecondaryContainerStyled>
    </>
  );
};

export default Hero;
