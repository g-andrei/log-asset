import { Typography } from "../../components";
import {
  AnimationImageStyled,
  FirstHeroContainerStyled,
  SecondaryContainerStyled,
} from "./Hero.styled";

const Hero = () => {
  return (
    <>
      <FirstHeroContainerStyled>
        <div style={{ display: "flex", width: "66%" }}>
          <div>
            <Typography
              variant="h1"
              style={{
                textTransform: "uppercase",
                fontWeight: "800",
                lineHeight: "40px",
              }}
            >
              make your personality into technology.
            </Typography>

            <div style={{ width: "66%" }}>
              <Typography
                variant="paragraph"
                style={{ lineHeight: "14px", marginTop: "20px" }}
              >
                Robot technology is faster with the latest systems that make it
                possible your partner and ready to serve your needs. EnttTer
                email to get product launch information
              </Typography>
              <div style={{ height: "100px" }}></div>
              <div
                style={{
                  width: "66%",
                  display: "flex",
                  gap: "30px",
                  marginTop: "32px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <img src="rtxIcon.svg" alt="rtx-1134" />
                  <Typography
                    variant="paragraph"
                    style={{ color: "white", marginTop: "10px" }}
                  >
                    Using the{" "}
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
                    style={{ color: "white", marginTop: "10px" }}
                  >
                    Useinfrared
                    <span style={{ fontWeight: "bold" }}>
                      <br /> Platinum 2.14
                    </span>
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FirstHeroContainerStyled>

      <SecondaryContainerStyled>
        <div style={{ width: "40%" }}>
          <Typography variant="h3" style={{ color: "#e56c38" }}>
            1500+ Clients
          </Typography>
          <Typography variant="h5" style={{ color: "#fff", marginTop: "14px" }}>
            Various clients around the world who have used our products
          </Typography>
        </div>
      </SecondaryContainerStyled>

      <AnimationImageStyled src="animation.svg" alt="animation" />
    </>
  );
};

export default Hero;
