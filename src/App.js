import React, { Component } from 'react';
import './App.css';
import {Button, AppBar, Toolbar, Typography} from 'material-ui'
import Caroussel from './Caroussel/Caroussel.js'


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
        <Button raised color='primary'>
          yolo bite
        </Button>
        <Caroussel/>
      </div>
      //footer
    );
  }
}

export default App;
