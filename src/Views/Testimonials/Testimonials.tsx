import { Button, Typography } from "../../components";
import colors from "../../themes/colors";
import spacings from "../../themes/spacings";
import { isMobile } from "../../utils";
import {
  ButtonSectionStyled,
  FirstSectionTestimonialsStyled,
  SecondSectionTestimonialsStyled,
  SectionStyled,
} from "./Testimonials.styled";

const Testimonials = () => {
  return (
    <section>
      <FirstSectionTestimonialsStyled>
        <Typography variant="h2" style={{ fontWeight: "500" }}>
          Trusted by over
          <span style={{ color: colors.text.highlited }}> 3200K</span>
          <br /> Founder customers
        </Typography>
      </FirstSectionTestimonialsStyled>

      <SecondSectionTestimonialsStyled>
        <SectionStyled>
          <div style={{ width: isMobile ? "100%" : "40%" }}>
            <Typography
              variant="h2"
              style={{
                color: colors.text.primary,
                lineHeight: isMobile ? "unset" : spacings.main.s36,
              }}
            >
              Let's get it now
              <br /> robot sally
            </Typography>

            <Typography
              variant="paragraph"
              style={{
                color: colors.text.primary,
                marginTop: spacings.main.s20,
              }}
            >
              Make your video experience amazing and join thousands of satisfied
              customers already using robot sally
            </Typography>
          </div>

          <ButtonSectionStyled>
            <Button>
              <img src="cartButton.svg" alt="shop icon" />
              <Typography
                variant="paragraph"
                style={{ color: colors.text.primary }}
              >
                Preorder Now
              </Typography>
            </Button>

            <Typography
              variant="paragraph"
              style={{
                color: colors.text.primary,
                textAlign: isMobile ? "unset" : "end",
                marginTop: spacings.main.s20,
              }}
            >
              Sally's robot is only made limited, so who's quick he gets
            </Typography>
          </ButtonSectionStyled>
        </SectionStyled>
        <img
          src="decorationTestimonials.svg"
          alt="testimonials decoration"
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            display: isMobile ? "none" : "block",
          }}
        />
      </SecondSectionTestimonialsStyled>
    </section>
  );
};

export default Testimonials;
