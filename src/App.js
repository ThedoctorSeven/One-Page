import React, { Component } from "react";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import { AppBar, Toolbar, Typography, Grid, Button } from "material-ui";
import { CarouselContainer, Form, Map, Panel, Joke } from "./Common";
import "./index.css";
import smoothscroll from "smoothscroll";

class App extends Component {
  scroll = id => {
    smoothscroll(document.getElementById(id));
  };

  render() {
    const theme = createMuiTheme();
    return (
      // Menu
      //joke => Ajax   (Champs texte, bouton refresh)
      //Caroussel (image => ajax)
      <div>
        <MuiThemeProvider theme={theme}>
          <AppBar className="appBar" position="static" color="default">
            <Toolbar>
              <Typography type="title" color="inherit">
                One Page
              </Typography>
              <Button onClick={() => this.scroll("map")} raised color="primary">
                ->
              </Button>
            </Toolbar>
          </AppBar>

          <Grid
            container
            spacing={40}
            alignItems="center"
            direction="row"
            justify="center"
          >
            <Grid item xs={12} sm={10} xl={10}>
              <CarouselContainer />
              <Panel text="yolo" title="yolo" />
            </Grid>
            <Grid item xs={12} sm={10} xl={10}>
              <Form />
              <Panel text="bite" title="chat" />
            </Grid>
            <Grid item xs={12} sm={10} xl={10}>
              <Joke />
              <Panel text="bite" title="chat" />
            </Grid>
            <Grid item xs={12} sm={10} xl={10} id="map">
              <Map />
              <Panel text="bite" title="chat" />
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
