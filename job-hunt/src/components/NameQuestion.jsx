import React, {Component} from 'react';
import {Card, Button, Input, Field} from 'reactbulma'

export class NameQuestion extends Component {
    render() {
        return <div className="App">
            <div className="columns">
                <div className="column is-one-third"/>
                <div className="column">
                    <Card>
                        <Card.Content><div>What's your name?</div>
                            <Field>
                            <Input small id="small" />
                            </Field>
                            <Button primary>Continue</Button>
                        </Card.Content>

                    </Card>
                </div>
                <div className="column is-one-third"/>

            </div>
        </div>
    }
}
