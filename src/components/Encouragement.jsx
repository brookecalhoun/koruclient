import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../components/Card";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    background: "#f1f1f1",
  },
  heading: {
    fontFamily: "times, Times New Roman, times-roman, georgia, serif",
    fontSize: "25px",
    lineHeight: "40px",
    letterSpacing: "-1px",
    color: "#444",
    fontWeight: "100",
  },
}));

export default function Encouragement() {
  const classes = useStyles();

  return (
    <div>
      <Grid
        id="quote-page"
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.root}
      >
        <Grid item md={8} sm={8} xs={10}>
          <p className='quote-generator'>hit refresh and copy your favorite quote</p>
          <div className="light-green">
            <br />
            <Card />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
