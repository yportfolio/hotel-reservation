import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h2">
        Loading...
      </Typography>
      <CircularProgress />
    </div>
  );
}
