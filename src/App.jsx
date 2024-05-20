import React, { useState, Fragment } from 'react';
import { EXAMPLES } from './data.js';
import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './Header.jsx';
import CoreConcepts from './Concepts.jsx';
import TabButton from './TabButton.jsx';
import CConcepts from './CConcepts.jsx';
import Examples from './Examples.jsx';

console.log(componentsImg);

const descriptions = ['fundamental', 'core', 'crucial'];

function random(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {

  return (
    <>
      <Header />
      <main>
        <h2>Core Concepts</h2>
        <CConcepts />

        <Examples />      
      </main>
    </>
  );
}

export default App;
