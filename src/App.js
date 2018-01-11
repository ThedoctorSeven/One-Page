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
              text="Ce site a été développé à l'aide de <a target='_blank' href='https://reactjs.org/'>React</a>, un FrameWork JavaScript puissant.
              En tant que Gestionnaire de Dépendances, <a target='_blank' href='https://yarnpkg.com/en/'>Yarn </a> semblait être le bon choix.
              Grâce à celui-ci, les différentes applications, telles que le <a target='_blank' href='https://www.npmjs.com/package/smoothscroll'>SmoothScroll</a>, ont pu être intégrées sans problème, vous pouvez le voir en cliquant sur les icônes du Header."
              title="Introduction"
            />
            <CarouselContainer />
            <Panel
              text="Le Carrousel a été réalisé avec <a target='_blank' href='https://www.npmjs.com/package/react-responsive-carousel'>React-Responsive-Carousel</a> et récupère les images directement à partir du Website <a target='_blank' href='https://picsum.photos/'>LoremPicsum</a> à l'aide d'un Fetch (et des Promise). Les images sont prises au hasard."
              title="Carrousel"
            />
          </Grid>
          <Grid item xs={12} sm={10} xl={10} id="form">
            <Form />
            <Panel
              text="Ce formulaire est créé avec un <a target='_blank' href='https://material-ui-next.com/demos/cards/'>Card</a> ainsi que les <a target='_blank' href='https://material-ui-next.com/demos/buttons/'>Boutons</a> et les Zones de <a target='blank' href='https://material-ui-next.com/demos/text-fields/'>Texte</a> sont issues de <a target='blank' href=https://material-ui-next.com/>Material-ui-next</a>. 
              Le <a target='_blank' href= 'https://www.npmjs.com/package/material-ui-pickers'>DatePicker</a> provient d'un paquet npm.
              À cela il a été ajouté un validateur, <a target='_blank' href='https://www.npmjs.com/package/joi'>Joi</a>, pour s'assurer que les informations fournies soient exactes et au bon format."
              title="Formulaire et validation"
            />
          </Grid>
          <Grid item xs={12} sm={10} xl={10} id="joke">
            <Panel
              text="Cette zone est une simple Card dans laquelle une requête <a target='_blank' href='https://www.npmjs.com/package/xhr-request'>XHR</a> est faite à <a target='_blank' href='https://api.chucknorris.io/jokes/random'>l'API</a> et une nouvelle requête est faite à chaque clic sur le bouton 'suivant'."
              title="C.N. Facts"
            />
            <Joke />
          </Grid>
          <Grid item xs={12} sm={10} xl={10} id="map">
            <Map />
            <Panel
              text="La Carte a été importée par un paquet <a target'_blank' href='https://www.npmjs.com/package/google-maps'>npm</a> utilisant l'API GoogleMaps. Pour cela le <a target='_blank' href='https://developers.google.com/maps/documentation/javascript/tutorial?hl=fr'>tutoriel</a> de mise en place était plutôt clair et précis sur la démarche à suivre et la configuration à mettre en place."
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
