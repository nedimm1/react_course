import CoreConcepts from './Concepts.jsx';

import { CORE_CONCEPTS } from './data.js';

export default function CConcepts(){
    return(
        <section id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map((concept, index) => (
            <CoreConcepts key={index} {...concept} />
          ))}
        </ul>
      </section>
    )
}