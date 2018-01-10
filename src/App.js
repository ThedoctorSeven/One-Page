import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { AppBar, Toolbar, Typography, Grid, IconButton } from "material-ui";
import Assignment from "material-ui-icons/Assignment";
import ViewCarousel from "material-ui-icons/ViewCarousel";
import FindReplace from "material-ui-icons/FindReplace";
import MapIcon from "material-ui-icons/Map";
import { CarouselContainer, Form, Map, Panel, Joke } from "./Common";
import "./index.css";
import smoothscroll from "smoothscroll";

const styles = {
  root: {
    width: "100%"
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  page: {
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
            <Typography className={classes.flex} type="title" color="inherit">
              One Page React
            </Typography>
            <IconButton
              onClick={() => this.scroll("carousel")}
              className={classes.menuButton}
              color="contrast"
              aria-label="Carousel"
            >
              <ViewCarousel />
            </IconButton>
            <IconButton
              onClick={() => this.scroll("form")}
              className={classes.menuButton}
              color="contrast"
              aria-label="Formulaire"
            >
              <Assignment />
            </IconButton>
            <IconButton
              onClick={() => this.scroll("joke")}
              className={classes.menuButton}
              color="contrast"
              aria-label="Joke"
            >
              <FindReplace />
            </IconButton>
            <IconButton
              onClick={() => this.scroll("map")}
              className={classes.menuButton}
              color="contrast"
              aria-label="Carte"
            >
              <MapIcon />
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
            <Panel
              text="Ce site a été developpé à l'aide de <a target='_blank' href='https://reactjs.org/'>React</a>, un FrameWork JavaScript puissant.
              En tant que Gestionnaire de Dépendances Yarn* semblait être le bon choix.
              Grâce à celui-ci, les différentes applications telles que le SmoothScroll* ont pu être intégrés sans problème, vous pouvez le voir en cliquant sur les icones du Header."
              title="Introduction"
            />
            <CarouselContainer />
            <Panel
              text="Le Carrousel a été réalisé avec React-Responsive-Carousel* et récupère les images directement a partir du Website LoremPicsum* a l'aide d'un Fetch (et des Promise), les images sont prises au hazard."
              title="Carrousel et fetch"
            />
          </Grid>
          <Grid item xs={12} sm={10} xl={10} id="form">
            <Form />
            <Panel
              text="Ce formulaire est créé avec un Card* ainsi que les Boutons* et les Zones de Texte* sont issues de Material-ui-next. Le DatePicker* provient d'un paquet npm.
              À cela il a été ajouté un validateur, Joi*, pour s'assurer que les informations fournies sont exactes et au bon format."
              title="Formulaire et validation"
            />
          </Grid>
          <Grid item xs={12} sm={10} xl={10} id="joke">
            <Panel
              text="Cette zone est une simple Card* dans laquelle une requête XHR est faite a l'API*zbou et une nouvelle requête est faite a chaque clique sur le bouton 'suivant'."
              title="C.N. Facts"
            />
            <Joke />
          </Grid>
          <Grid item xs={12} sm={10} xl={10} id="map">
            <Map />
            <Panel
              text="La Carte a été importé par un paquet npm* utilisant l'API GoogleMaps. Pour cela le tutoriel de mise en place était plutôt clair et précis sur la démancher à suivre et la configuration a mettre en place."
              title="Carte"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
