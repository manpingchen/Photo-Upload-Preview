import { styled } from "@mui/system";
import { Box } from "@mui/material";

const StyledCenteredBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  margin: "10px 5px",
});

const CenteredBox = (props) => {
  return <StyledCenteredBox>{props.children}</StyledCenteredBox>;
};

export default CenteredBox;
