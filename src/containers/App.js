import React, {Component} from 'react';
import Header from '../components/Header';
import Navigators from '../components/Navigators';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Navigators/>
            </div>
        )
    }
}

export default App;
