import React, { Component } from 'react';
import {Card, CardContent, CardHeader} from 'material-ui'
import {Map, withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import { compose, withProps } from "recompose"


class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    const MyMapComponent = compose(
        withProps({
          googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBySBp6JG-RTEThmDxpWhqkp4MgFHsVWyg&callback=initMap",
          loadingElement: <div style={{ height: `100%` }} />,
          containerElement: <div style={{ height: `400px` }} />,
          mapElement: <div style={{ height: `100%` }} />,
        }),
        withScriptjs,
        withGoogleMap
      )((props) =>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
          {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
        </GoogleMap>
      ))
      
      class MyFancyComponent extends React.PureComponent {
        state = {
          isMarkerShown: false,
        }
      
        componentDidMount() {
          this.delayedShowMarker()
        }
      
        delayedShowMarker = () => {
          setTimeout(() => {
            this.setState({ isMarkerShown: true })
          }, 3000)
        }
      
        handleMarkerClick = () => {
          this.setState({ isMarkerShown: false })
          this.delayedShowMarker()
        }

    render() {
    return (
        <Card>
            <CardHeader
            title="Map"
          />
        <CardContent>
          <div>Ici se trouve la Carte</div>
        </CardContent>
        </Card>
    )}

}

export default Map;
