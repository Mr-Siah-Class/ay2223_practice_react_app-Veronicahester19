import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import NoScreen from './screens/NoScreen'
import FooterBar from './components/FooterBar';

class App extends React.Component
{
    constructor() {
        super()
    }

    render()
    {
        return (
            <div>
              <NavBar/>
              <NoScreen/>
                <h1>Hello React!</h1>
                <FooterBar/>
            </div>
        );
    }
}

export default App;