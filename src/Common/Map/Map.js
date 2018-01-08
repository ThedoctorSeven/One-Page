import React, { Component } from 'react';
import {Card, CardContent, CardHeader} from 'material-ui'
import {map} from 'react-google-maps'

class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {}
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
