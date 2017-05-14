import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from '../components/Header';
import Navigators from '../components/Navigators';
import Home from '../components/Home';
import Comp1 from '../components/Comp1'
import Comp2 from '../components/Comp2'
import Comp3 from '../components/Comp3'
import NoMatch from '../components/NoMatch';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Navigators/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/comp1" component={Comp1}/>
                        <Route path="/comp2" component={Comp2}/>
                        <Route path="/comp3" component={Comp3}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
