import React from "react";
import './app.css'

import SearchBar from './SearchBar';

function App() {
  return (
    <div className="main ui container">
      <header className="">
        <h2 className="ui dividing header">Contact Searcher</h2>
      </header>
      <section>
        <SearchBar></SearchBar>
      </section>
    </div>
  );
}

export default App;
