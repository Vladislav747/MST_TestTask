import React from 'react';
import './App.css';
import {Header, NavPanel, Banner, Footer} from "./components";

function App() {
  return (
    <div className="App">
        <Header />
        <div className="max-width">
              <div className="main">
                <NavPanel />
                <Banner />
              </div>
        </div>
        
        <Footer />
    </div>
  );
}

export default App;
