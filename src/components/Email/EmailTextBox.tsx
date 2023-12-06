import { Button, Typography } from "..";
import { InputContainerStyled, InputEmaylStyled } from "./EmailTextBox.styled";

const EmailTextBox = () => {
  return (
    <InputContainerStyled>
      <InputEmaylStyled
        placeholder="Enter your email address"
        type="email"
        id="email"
      />
      <Button>
        <Typography variant="paragraph" style={{ color: "#fff" }}>
          Submit
        </Typography>
      </Button>
    </InputContainerStyled>
  );
};

export default EmailTextBox;
