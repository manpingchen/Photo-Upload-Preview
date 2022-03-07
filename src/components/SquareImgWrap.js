import React, { Fragment, useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import defaultImg from "../assets/images/default.svg";
import { styled } from "@mui/system";

const StyledImageWrap = styled("div")({
  display: "block",
  width: "100%",
  position: "relative",
  height: 0,
  paddingTop: "100%",
  zIndex: 9,
  "& img": {
    width: "100%",
  },
  "&>div": {
    border: "1px solid #eee",
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: "calc( 100% - 2px)",
    height: "calc( 100% - 2px)",
    overflow: "hidden",
  },
});

const SquareImgWrap = (props) => {
  const { src, alt, onClick } = props;
  const [url, setUrl] = useState(null);
  const [isImageReady, setIsImageReady] = useState(false);

  const handleOnLoad = () => {
    setIsImageReady(true);
    console.log({ src }, "IMAGE READY");
  };

  useEffect(() => {
    setUrl(src);
  }, [src]);

  return (
    <Fragment>
      <StyledImageWrap onClick={onClick || undefined}>
        {!isImageReady && url && <CircularProgress color="secondary" />}
        <div>
          <img src={url || defaultImg} alt={alt || "default-image"} onLoad={handleOnLoad} />
        </div>
      </StyledImageWrap>
    </Fragment>
  );
};

export default SquareImgWrap;
