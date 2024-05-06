import reactImg from "./assets/react-core-concepts.png"
import  componentsImg from "./assets/components.png"
import { CORE_CONCEPTS } from "./data.js"
import Header from "./Header.jsx"
import CoreConcepts from "./Concepts.jsx"
import TabButton from "./TabButton.jsx"

console.log(componentsImg)

const descriptions = ['fundamental', 'core', 'crucial']

function random(max){
  return Math.floor(Math.random() * (max + 1))
}


function App() {
  return (
    <div>
    <Header></Header>
      <main>
        <h2>Core Concepts</h2>
        <section id="core-concepts">
          <ul>
            <CoreConcepts 
            
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}>
            
            </CoreConcepts>

            <CoreConcepts
             {...CORE_CONCEPTS[1]}>
            </CoreConcepts>
            
            <CoreConcepts
             {...CORE_CONCEPTS[2]}>
            </CoreConcepts>

            <CoreConcepts
             {...CORE_CONCEPTS[3]}>
            </CoreConcepts>
          </ul>
        </section>

      <section id="examples">
          <h2>Examples</h2>
          <TabButton>Components</TabButton>
          <TabButton>JSX</TabButton>
          <TabButton>Props</TabButton>
          <TabButton>State</TabButton>
      </section>

      </main>
    </div>
  );
}

export default App;
