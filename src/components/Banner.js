import React from "react";
import Typography from "@material-ui/core/Typography";
export default function Banner({ children, title, subtitle }) {
  return (
    <div className="banner">
      <Typography variant={"h2"} component={"h1"} gutterBottom>
        {title}
      </Typography>
      <div></div>
      <Typography variant={"h6"} component={"h2"} gutterBottom>
        {subtitle}
      </Typography>
      {children}
    </div>
  );
}
