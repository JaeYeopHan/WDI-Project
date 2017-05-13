import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from '../components/Header';
import Navigators from '../components/Navigators';
import Home from '../components/Home';
import Comp1 from '../components/Comp1'
import Comp2 from '../components/Comp2'
import Comp3 from '../components/Comp3'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Navigators/>
                    <div>
                        <Switch>
                            <Route path="/" component={Home}/>
                            <Route path="/comp1" component={Comp1}/>
                            <Route path="/comp2" component={Comp2}/>
                            <Route path="/comp3" component={Comp3}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;
