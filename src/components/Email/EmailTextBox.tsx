import { Button } from "..";
import { InputContainerStyled, InputEmaylStyled } from "./EmailTextBox.styled";

const EmailTextBox = () => {
  return (
    <InputContainerStyled>
      <InputEmaylStyled
        placeholder="Enter your email address"
        type="email"
        id="email"
      />
      <Button>Submit</Button>
    </InputContainerStyled>
  );
};

export default EmailTextBox;
