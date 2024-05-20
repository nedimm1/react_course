import React, { useState, Fragment } from 'react';
import { EXAMPLES } from './data.js';
import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './Header.jsx';
import CoreConcepts from './Concepts.jsx';
import TabButton from './TabButton.jsx';

console.log(componentsImg);

const descriptions = ['fundamental', 'core', 'crucial'];

function random(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const [sTopic, ssTopic] = useState('');

  function handleSelect(selected) {
    ssTopic(selected);
  }

  let tabContent;

  if (sTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[sTopic].title}</h3>
        <p>{EXAMPLES[sTopic].description}</p>
        <pre>
          <code>{EXAMPLES[sTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Fragment>
      <Header />
      <main>
        <h2>Core Concepts</h2>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcepts key={index} {...concept} />
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={sTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={sTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={sTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={sTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </Fragment>
  );
}

export default App;
