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
            subheader="Tous les champs doivent être valide pour envoyer un message"
          />
        <CardContent>
          <div>La carte bordel de merde</div>
        </CardContent>
        </Card>
    )}

}

export default Map;
