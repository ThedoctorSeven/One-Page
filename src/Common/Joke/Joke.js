import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

const styles = theme => ({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary
  }
});

class Joke extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: ""
    };
  }

  loadJoke = () => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        this.setState({ joke: this.responseText });
      }
    };
    xhr.open("GET", ": https://api.chucknorris.io/jokes/random", true);
    xhr.send();
  };

  render() {
    const { classes } = this.props;
    const { joke } = this.state; // => const joke = this.state.joke
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.pos}>Joke</Typography>
            <Typography component="p">{joke}</Typography>
          </CardContent>
          <CardActions>
            <Button dense onClick={this.loadJoke}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

Joke.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Joke);
