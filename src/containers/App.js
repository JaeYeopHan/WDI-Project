import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../modules';

import { Header } from '../components/header';
import { CategorySelector } from '../components/categorySelector';
import Home from '../components/Home';
import Category from '../components/options/Category';
import NoMatch from '../components/NoMatch';

class App extends Component {
    render() {
        const { test } = this.props;
        return (
            <Router>
                <div>
                    <Header/>
                    <CategorySelector/>
                    <Switch>
                        <Route exact path="/" component={ Home }/>
                        <Route path="/1" component={ Category }/>
                        <Route path="/2" component={ Category }/>
                        <Route path="/3" component={ Category }/>
                        <Route path="/4" component={ Category }/>
                        <Route component={ NoMatch }/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

const mapToDispatch = (dispatch) => ({
    test: () => dispatch(actions.test())
});

export default connect(null, mapToDispatch)(App);
