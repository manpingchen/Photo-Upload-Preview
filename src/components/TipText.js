import { styled } from "@mui/system";

const StyledTipText = styled("p")({
  color: "#ddd",
  margin: 10,
  fontWeight: "bold",
  fontSize: 13
});

const TipText = () => {
  return <StyledTipText>Valid dimension: 1920 * 1080px</StyledTipText>;
};

export default TipText;
