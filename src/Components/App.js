// react import
import React from 'react'

// react-router imports
import { HashRouter, Switch, Route } from 'react-router-dom';

// main components
import Navigation from './Navigation';
import Landing from './Landing';
import Labs from './Labs';
import Contact from './Contact';
import About from './About/';

class App extends React.Component {

    render() {
        return (
            <div id="app">
                <HashRouter>
                    <Navigation />
                    <Switch>
                        <Route exact path="/">
                            <Landing />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/labs">
                            <Labs />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                    </Switch>
                </HashRouter>
            </div>
        );
    }

}

export default App;