import StyledTypography from "./Typography.styled";
import { Tags, TypograpyProps } from "./types";

const Typography = ({ variant, children, style, href }: TypograpyProps) => {
  return (
    <StyledTypography
      variant={variant}
      as={Tags[variant as keyof typeof Tags]}
      style={style}
      href={href}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
