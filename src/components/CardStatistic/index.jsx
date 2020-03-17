import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: 10,
    maxWidth: 250
  },
  card: {
    display: "flex"
  }
});

export default function CardStatistic() {
  const classes = useStyles();

  return (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="el-basma"
                height="140"
                image="images/elBasma.jpg"
                title="el Basma Organization"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  El-Basma
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="el-basma"
                height="140"
                image="images/elBasma.jpg"
                title="el Basma Organization"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  El-Basma
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="el-basma"
                height="140"
                image="images/elBasma.jpg"
                title="el Basma Organization"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  El-Basma
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
  );
}
