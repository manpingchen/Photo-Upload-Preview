import { styled } from "@mui/system";

const StyledErrorText = styled("p")({
  color: "salmon",
  margin: 10,
  fontWeight: "bold"
});

const ErrorText = () => {
  return <StyledErrorText>Oops! Invalid Size</StyledErrorText>;
};

export default ErrorText;
