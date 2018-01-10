import React, { Component } from "react";
import "./App.css";
import PropTypes from 'prop-types';
import { withStyles } from "material-ui/styles";
import { AppBar, Toolbar, Typography, Grid, IconButton } from "material-ui";
import ViewCarousel from "material-ui-icons/ViewCarousel";
import QuestionAnswer from "material-ui-icons/QuestionAnswer";
import { CarouselContainer, Form, Map, Panel, Joke } from "./Common";
import "./index.css";
import smoothscroll from "smoothscroll";

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  page:{
    marginTop: 85
  }
};

class App extends Component {
  scroll = id => {
    smoothscroll(document.getElementById(id));
  };

  render() {
    const { classes } = this.props;
    return (
      // Menu
      //joke => Ajax   (Champs texte, bouton refresh)
      //Caroussel (image => ajax)
      <div className={classes.page}>
          <AppBar className="appBar" position="fixed" color="primary">
            <Toolbar>
              <Typography  className={classes.flex} type="title" color="inherit">
                Bryan Motta
              </Typography>
                <IconButton color="accent" onClick={() => this.scroll("carousel")} className={classes.menuButton} color="contrast" aria-label="Carousel">
                  <ViewCarousel />
                </IconButton>
                <IconButton color="accent" onClick={() => this.scroll("form")} className={classes.menuButton} color="contrast" aria-label="Carousel">
                  <QuestionAnswer />
                </IconButton>
                <IconButton color="accent" onClick={() => this.scroll("joke")} className={classes.menuButton} color="contrast" aria-label="Carousel">
                  <ViewCarousel />
                </IconButton>
                <IconButton color="accent" onClick={() => this.scroll("map")} className={classes.menuButton} color="contrast" aria-label="Carousel">
                  <ViewCarousel />
                </IconButton>
            </Toolbar>
          </AppBar>

          <Grid
            container
            spacing={40}
            alignItems="center"
            direction="row"
            justify="center"
          >
            <Grid item xs={12} sm={10} xl={10} id="carousel">
              <CarouselContainer />
              <Panel text="yolo" title="yolo" />
            </Grid>
            <Grid item xs={12} sm={10} xl={10} id="form">
              <Form />
              <Panel text="bite" title="chat" />
            </Grid>
            <Grid item xs={12} sm={10} xl={10} id="joke">
              <Joke />
              <Panel text="bite" title="chat" />
            </Grid>
            <Grid item xs={12} sm={10} xl={10} id="map">
              <Map />
              <Panel text="bite" title="chat" />
            </Grid>
          </Grid>
      </div>
    );
  }
}


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
