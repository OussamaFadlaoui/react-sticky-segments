import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="AppHeader">
                <h1>react-sticky-segments-hook</h1>
            </header>

            <div style={{textAlign: 'center'}}>
                <p>A React.js hook for fancy sticky-scrolling segments</p>
                <p>Start scrolling the page to see the action!</p>
            </div>

            <div className="AppDemo">
                <div className="AppDemoSlide">
                    Demo slide 1
                </div>
            </div>
        </div>
    );
}

export default App;
