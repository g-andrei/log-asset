import { Typography } from "../../components";
import sizes from "../../themes/sizes";
import spacings from "../../themes/spacings";
import { isMobile } from "../../utils";

interface TestimonialItemProps {
  content: string;
  author: string;
  role: string;
}

const TestimonialItem = ({ content, author, role }: TestimonialItemProps) => (
  <div
    style={{
      padding: spacings.main.s16,
      background: "#fff",
      width: isMobile ? sizes.main.s126 : "auto",
    }}
  >
    <Typography variant="paragraph" style={{ lineHeight: spacings.main.s16 }}>
      {content}
    </Typography>
    <div
      style={{
        marginTop: spacings.main.s34,
        display: "flex",
        gap: spacings.main.s14,
        alignItems: "center",
      }}
    >
      <img
        src="imgPlaceholder.svg"
        alt="image placeholder"
        style={{ width: sizes.main.s32 }}
      />
      <div>
        <Typography variant="h5">{author}</Typography>
        <Typography variant="paragraph" style={{ marginTop: spacings.main.s6 }}>
          {role}
        </Typography>
      </div>
    </div>
  </div>
);

export default TestimonialItem;
