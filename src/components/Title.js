import React from "react";
import { Typography } from "@material-ui/core";

export default function Title({ title }) {
  return (
    <div className="section-title">
      <Typography variant="h2" component="h2" gutterBottom>
        {title}
      </Typography>
      <div></div>
    </div>
  );
}
