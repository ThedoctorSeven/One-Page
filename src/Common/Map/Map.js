import React, { Component } from "react";
import { Card, CardContent, CardHeader } from "material-ui";
import {
  Map,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

// Il faut déclarer les const en dehors de la class ou dans la fonction render
// Lorsqu'une modification du state est faite le composant est intégralement rerendu donc
// il vaut mieux déclarer le const en dehors de la fonction render (plus perf)
const MapWithAMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={9} defaultCenter={{ lat: 48.4, lng: -4.48333 }}>
      <Marker position={{ lat: 48.4, lng: -4.48333 }} />
    </GoogleMap>
  ))
);

// J'ai dû renommer la class Map en MapContainer parce qu'on utilise déjà une class qui se nomme map
// importé de "react-google-maps"
class MapContainer extends Component {
  render() {
    return (
      <Card>
        <CardHeader title="Map" />
        <CardContent>
          {/* Je met ici le composant créé au dessus dans le const, oui oui on peut aussi faire comme ça */}
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBySBp6JG-RTEThmDxpWhqkp4MgFHsVWyg&callback=initMap"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </CardContent>
      </Card>
    );
  }
}

export default MapContainer;
