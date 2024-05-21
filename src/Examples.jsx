import { useState } from "react"

import TabButton from "./TabButton"

import { EXAMPLES } from "./data"

export default function Examples(){
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
   return(
    <section id="examples">
    <h2>Examples</h2>
    <menu>
      <TabButton isSelected={sTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
      <TabButton isSelected={sTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
      <TabButton isSelected={sTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
      <TabButton isSelected={sTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
    </menu>
    {tabContent}
  </section>
   )
}