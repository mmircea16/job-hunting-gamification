import React, { Component } from 'react';
import {Card}  from 'reactbulma'

export class NameQuestion extends Component {
    render() {
        return  <div className="App">
            <Card>
                <Card.Content>What's your name?</Card.Content>
            </Card>
        </div>
    }
}
