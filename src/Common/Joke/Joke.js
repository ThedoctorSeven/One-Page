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

  componentDidMount() {
    this.loadJoke();
  }
  
  loadJoke = () => {
    let xhr = new XMLHttpRequest(), that = this;
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const obj = that
        const resp = JSON.parse(xhr.responseText)
        const joke = resp.value
        obj.setState({joke})
      }
      
    };
    xhr.open("GET", "https://api.chucknorris.io/jokes/random", true);
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
              Charger une blague
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
