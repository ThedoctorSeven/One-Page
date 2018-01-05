import React, { Component } from 'react';
import './App.css';
import {Button, AppBar, Toolbar, Typography} from 'material-ui'
//import d'un caroussel à l'aide d'un paquet npm (rapide ~2min)
import {Carousel} from 'react-responsive-carousel'
//besoin d'ajouter le css en plus
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


class App extends Component {
  render() {
    return (
      // Menu
      //joke => Ajax   (Champs texte, bouton refresh)
      //Caroussel (image => ajax)
      <div>

        <AppBar position="static" color="default">
          <Toolbar>
            <Typography type="title" color="inherit">
              Ma couille
            </Typography>
          </Toolbar>
        </AppBar>

        {/* on démarre notre caroussel ici    je t'explique pourquoi les commentaires son bizarre dans la journée si tu veux ou ce soir */}
        <Carousel showArrows={true}>
        {/* Tu peux voir une répétition de code pour les différentes images */}
        <div>
            <img alt="random pic" src="https://picsum.photos/500/300/?random" />
            <p className="legend">Legend 1</p>
        </div>
        {/* Normalement on crée un composant (image par exemple pour faciliter la gestion du code #SingleSourceOfTruth) */}
        <div>
            <img src="https://picsum.photos/500/300/?random" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src="https://picsum.photos/500/300/?random" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src="https://picsum.photos/500/300/?random" />
            <p className="legend">Legend 4</p>
        </div>
        <div>
            <img src="https://picsum.photos/500/300/?random" />
            <p className="legend">Legend 5</p>
        </div>
        <div>
            <img src="https://picsum.photos/500/300/?random" />
            <p className="legend">Legend 6</p>
        </div>
      </Carousel>

        <Button raised color='primary'>
          yolo bite
        </Button>
      </div>
      //footer
    );
  }
}

export default App;
