import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { AppBar, Toolbar, Typography, Grid } from 'material-ui'
import { CarouselContainer, Form, Map } from './Common'



class App extends Component {
  render() {
    const theme = createMuiTheme();
    return (
      // Menu
      //joke => Ajax   (Champs texte, bouton refresh)
      //Caroussel (image => ajax)
      <div >
        <MuiThemeProvider theme={theme}>

          <AppBar position="static" color="default">
            <Toolbar>
              <Typography type="title" color="inherit">
                One Page
            </Typography>
            </Toolbar>
          </AppBar>

          <Grid container spacing={40} alignItems="center" direction="row" justify="center">
            <Grid item xs={12} sm={10}>
              <CarouselContainer />
            </Grid>
            <Grid item xs={12} sm={10}>
              <Form />
            </Grid>
            <Grid item xs={12}>
              <Map />
            </Grid>
          </Grid>


        </MuiThemeProvider>

      </div>

    );
  }
}

export default App;
