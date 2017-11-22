import { Meteor } from 'meteor/meteor';

import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import { createContainer } from 'meteor/react-meteor-data';

import { Jumbotron } from 'react-bootstrap';

class App extends Component {

    render() {

        return (

            <div>

                <Jumbotron>

                    <h1>Fiction Engine</h1>

                </Jumbotron>

            </div>

        );

    }
}
export default createContainer(() => {

    return {

    };

}, App);
