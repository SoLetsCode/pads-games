import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

//Material UI
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import biscuitImg from "../assets/BiscuitDefault.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "95vw",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    margin: "0 auto 0 auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function GameCard(props) {
  const { title, description, instruction, goal, challenge } = props.game;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  //fix so that the card will collapse when changing to a different game
  useEffect(() => {
    setExpanded(false);
  }, [title]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const displaySteps = (array) => {
    return array.map((data) => (
      <Typography paragraph key={uuidv4()}>
        {data}
      </Typography>
    ));
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="level" className={classes.avatar}>
            P
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<Typography variant="h6">{title}</Typography>}
      />
      <CardMedia className={classes.media} image={biscuitImg} title="Biscuit" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* NOT WORKING YET<IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share"> NOT WORKING YET
          <ShareIcon />
        </IconButton> */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph variant="h6">
            How to Play:
          </Typography>
          {displaySteps(instruction)}
          {goal && (
            <>
              <Typography paragraph variant="h6">
                Goal
              </Typography>
              <Typography paragraph>{goal}</Typography>
            </>
          )}

          {challenge && (
            <>
              <Typography paragraph variant="h6">
                Challenge Me!
              </Typography>
              <Typography paragraph>{challenge}</Typography>
            </>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}
