import { Typography } from "../../../components";
import colors from "../../../themes/colors";
import { CopyRightContainerStyled } from "./CopyRight.styled";

export interface CopyRightProps {
  color?: string;
}

const CopyRight = ({ color = colors.surfaces.secondary }: CopyRightProps) => {
  return (
    <CopyRightContainerStyled color={color}>
      <Typography variant="paragraph" style={{ color: colors.text.primary }}>
        &copy; 2021-2022, All Rights Reserved
      </Typography>
    </CopyRightContainerStyled>
  );
};

export default CopyRight;
