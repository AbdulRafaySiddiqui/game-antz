import React from "react";
import { Button, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FileUploader from "src/components/FileUploader/FileUploader";
import useModal from "src/hooks/useModal";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));

interface Props {}

const Test: React.FC<Props> = () => {
  const classes = useStyles();
  const { openModal } = useModal();

  const onFile = (file: File | File[]) => {
    console.log(file);
  };

  const handleModal = () => {
    openModal("Hello", {}, {});
  };

  return (
    <div className={classes.root}>
      This is home
      <Typography>hello</Typography>
      <form>
        <div>
          <FileUploader onFile={onFile} required noText multi cover />
        </div>
        <Button type="submit">Submit</Button>
      </form>
      <Button variant="outlined" onClick={handleModal}>
        Open Modal
      </Button>
    </div>
  );
};

export default Test;
