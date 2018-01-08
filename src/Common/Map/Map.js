import React, { Component } from 'react';
import {Card, CardContent, CardHeader} from 'material-ui'

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
            subheader="La carte drevrait s'afficher ici"
          />
        <CardContent>
          <div>Ici se trouve la Carte</div>
        </CardContent>
        </Card>
    )}

}

export default Map;
