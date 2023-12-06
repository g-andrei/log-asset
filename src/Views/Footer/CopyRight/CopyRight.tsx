import { Typography } from "../../../components";
import colors from "../../../themes/colors";
import { CopyRightContainerStyled } from "./CopyRight.styled";

const CopyRight = () => {
  return (
    <CopyRightContainerStyled>
      <Typography variant="paragraph" style={{ color: colors.text.primary }}>
        &copy; 2021-2022, All Rights Reserved
      </Typography>
    </CopyRightContainerStyled>
  );
};

export default CopyRight;
