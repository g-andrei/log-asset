import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { CaruselCountainerStyled } from "./TestimonialsCarusel.styled";
import { isMobile } from "../../utils";
import TestimonialItem from "./TestimonialItemCarusel";

const TestimonialsCarusel = () => {
  return (
    <CaruselCountainerStyled>
      <Carousel
        additionalTransfrom={0}
        arrows={!isMobile}
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="container-padding-bottom"
        draggable
        focusOnSelect={false}
        infinite={true}
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 720,
              min: 188,
            },
            items: 3,
            partialVisibilityGutter: 100,
          },
          mobile: {
            breakpoint: {
              max: 188,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        slidesToSlide={1}
        swipeable
      >
        <TestimonialItem
          content="I am very grateful to the developers who have created Sally's robot. Very helpful in my life. I hope you can develop in the future."
          author="Craig Press"
          role="Founder Digital Apps"
        />

        <TestimonialItem
          content="I don't have much to say, except it is a really, really, really good and affordable Robot. Thanks, I hope we are going to hop a lot in the future :)"
          author="Paityn Septimus"
          role="Software Developer"
        />

        <TestimonialItem
          content="So amazing this is the robot I dreamed of. thank you sally and the developer team, we are really waiting for other amazing products that you make in the future."
          author="Alfonso Baptista"
          role="Co Founder AI Technology"
        />
      </Carousel>
    </CaruselCountainerStyled>
  );
};

export default TestimonialsCarusel;
