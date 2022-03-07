import React, { useState, Fragment } from "react";
import { Button } from "@mui/material";
import SquareImgWrap from "./SquareImgWrap";
import SimpleDialog from "./SimpleDialog";
import ErrorText from "./ErrorText";
import { isValidSize } from "../helpers/imageValidation";
import CenteredBox from "../layout/CenteredBox";
import { styled } from "@mui/system";

const StyledAvatarWrap = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 200,
  height: 200,
  position: "relative",
  overflow: "hidden",
  marginBottom: 20,
  cursor: "pointer",
  "& input": {
    zIndex: -1,
  },
  "&>div": {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
  },
});

const PhotoUploader = () => {
  const [isInvalidSize, setIsInvalidSize] = useState(false);
  const [src, setSrc] = useState(null);
  const [alt, setAlt] = useState(null);
  const [anchorElForDialog, setAnchorElForDialog] = useState(null);

  const handleOpenCoverPhotoOptionPopover = (event) => {
    setAnchorElForDialog(event.currentTarget);
    setIsInvalidSize(false);
  };

  const handleCloseActionPopover = () => {
    setAnchorElForDialog(null);
  };

  const handleFileUpload = (event) => {
    setAnchorElForDialog(null);
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);

      let img = new Image();
      img.onload = function () {
        if (isValidSize(this.width, this.height)) {
          setIsInvalidSize(false);
          setSrc(url);
          setAlt(file.name);
        } else {
          setIsInvalidSize(true);
        }
      };
      img.src = url;
    }
  };

  return (
    <Fragment>
      <StyledAvatarWrap>
        <div className="avatar-image">
          <SquareImgWrap src={src} alt={alt} onClick={handleOpenCoverPhotoOptionPopover} />
        </div>
        <input
          type="file"
          id="upload-cover"
          multiple={false}
          accept="image/*"
          className="top-0 left-0 absolute upload-native-input display-none"
          onChange={handleFileUpload}
        />
      </StyledAvatarWrap>
      {isInvalidSize && <ErrorText />}
      <SimpleDialog
        id={anchorElForDialog}
        anchorEl={anchorElForDialog}
        onClose={handleCloseActionPopover}
        anchorOrigin={{ vertical: "center", horizontal: "right" }}
      >
        <CenteredBox>
          <Button component="label" htmlFor="upload-cover">
            Select from computer
          </Button>
          <Button disabled={true}>Choose From Photo Pool</Button>
        </CenteredBox>
      </SimpleDialog>
    </Fragment>
  );
};

export default PhotoUploader;
