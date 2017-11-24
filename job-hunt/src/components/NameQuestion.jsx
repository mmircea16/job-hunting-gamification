import React, {Component} from 'react';
import {Card, Button, Input, Field} from 'reactbulma'
import Axios from 'axios'

export class NameQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};

        this.handleChange = this.handleChange.bind(this);
        this.postName = this.postName.bind(this);
    }

    postName() {
        console.log("postName");
        console.log(this.state);
        Axios.put('http://localhost:4567/applicant', {name: this.state.name})
    }

    handleChange(e) {
        if (e) {
            this.setState({ name: e.target.value });
        }
    }

    render() {
        return <div className="App">
            <div className="columns">
                <div className="column is-one-third"/>
                <div className="column">
                    <Card>
                        <Card.Content><div>What's your name?</div>
                            <Field>
                            <Input id="nameInput" onChange={this.handleChange()}/>
                            </Field>
                            <Button primary onClick={this.postName}>Continue</Button>
                        </Card.Content>

                    </Card>
                </div>
                <div className="column is-one-third"/>

            </div>
        </div>
    }
}
