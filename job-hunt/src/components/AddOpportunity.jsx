import React, { Component } from 'react';
import { Hero, Container, Title, SubTitle, Field, Control, Input, Notification, Button, Textarea } from 'reactbulma'
import Axios from 'axios'

export class AddOpportunity extends Component {
    constructor(props) {
        super(props);
        this.state = {"provider" : ""};

        this.setProvider = this.setProvider.bind(this);
        this.setCourse = this.setCourse.bind(this);
        this.setURL = this.setURL.bind(this);
        this.setContact = this.setContact.bind(this);
        this.setLocation = this.setLocation.bind(this);
        this.setDetails = this.setDetails.bind(this);
        this.setTags = this.setTags.bind(this);
        this.postData = this.postData.bind(this);
    }

    postData() {
        console.log("postData");
        console.log(this.state);
        Axios.post('http://localhost:4567/opportunity', this.state)
    }

    setProvider(e) {
        if (e) {
            var data = this.state;
            data["provider"] = e.target.value;
            this.setState(data);
        }
    }
    setCourse(e) {
        if (e) {
            var data = this.state;
            data["course"] = e.target.value;
            this.setState(data);
        }
    }
    setURL(e) {
        if (e) {
            var data = this.state;
            data["url"] = e.target.value;
            this.setState(data);
        }
    }
    setContact(e) {
        if (e) {
            var data = this.state;
            data["contact"] = e.target.value;
            this.setState(data);
        }
    }
    setLocation(e) {
        if (e) {
            var data = this.state;
            data["location"] = e.target.value;
            this.setState(data);
        }
    }
    setDetails(e) {
        if (e) {
            var data = this.state;
            data["details"] = e.target.value;
            this.setState(data);
        }
    }
    setTags(e) {
        if (e) {
            var data = this.state;
            data["tags"] = [e.target.value];
            this.setState(data);
        }
    }

  render() {
    return (
        <div>
          <Hero dark>
            <Hero.Body>
              <Container>
                <Title>
                  Game of Job Hunt
                </Title>
                <SubTitle>
                  Simplifying Your Way to Work..
                </SubTitle>
              </Container>
            </Hero.Body>
          </Hero>
          <Container>
            <Notification>
              <Field>
                  <label class="label">Provider Name</label>
                  <Control>
                    <Input type="text" placeholder="Enter Name" onChange={this.setProvider}/>
                  </Control>
              </Field>
              <Field>
                  <label class="label">Course Title</label>
                  <Control>
                    <Input type="text" placeholder="Enter Title" onChange={this.setCourse}/>
                  </Control>
              </Field>
              <Field>
                  <label class="label">Course Details</label>
                  <Control>
                    <Textarea placeholder="Enter details" onChange={this.setDetails}/>
                  </Control>
              </Field>
              <Field>
                  <label class="label">Location</label>
                  <Control>
                    <Input type="text" placeholder="Enter Location" onChange={this.setLocation}/>
                  </Control>
              </Field>
              <Field>
                  <label class="label">Job Description URL</label>
                  <Control>
                    <Input type="text" placeholder="Enter Job Description URL" onChange={this.setURL}/>
                  </Control>
              </Field>
              <Field>
                  <label class="label">Contact number</label>
                  <Control>
                    <Input type="text" placeholder="Enter Contact Number" onChange={this.setContact}/>
                  </Control>
              </Field>
              <Field>
                  <label class="label">Tags</label>
                  <Control>
                    <Input type="text" placeholder="Add relevant job fields" onChange={this.setTags}/>
                  </Control>
              </Field>
              <Button primary onClick={this.postData}>Add Opportunity</Button>
            </Notification>
          </Container>

        </div>
    );
  }
}