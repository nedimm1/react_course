import reactImg from "./assets/react-core-concepts.png"
import  componentsImg from "./assets/components.png"
import { CORE_CONCEPTS } from "./data.js"

console.log(componentsImg)

const descriptions = ['fundamental', 'core', 'crucial']

function random(max){
  return Math.floor(Math.random() * (max + 1))
}


function Header(){
   const des = descriptions[random(2)]

  return(
  <header>
  <img src={reactImg} alt="Stylized atom" />
  <h1>React Essentials</h1>
  <p>
    {des} React concepts you will need for almost any app you are
    going to build!
  </p>
</header>)
}

function CoreConcepts(props){
  return(
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
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
            title={CORE_CONCEPTS[1].title}
            description={CORE_CONCEPTS[1].description}
            image={CORE_CONCEPTS[1].image}>
            </CoreConcepts>
            
            <CoreConcepts
             title={CORE_CONCEPTS[2].title}
             description={CORE_CONCEPTS[2].description}
             image={CORE_CONCEPTS[2].image}>
            </CoreConcepts>

            <CoreConcepts
             title={CORE_CONCEPTS[3].title}
             description={CORE_CONCEPTS[3].description}
             image={CORE_CONCEPTS[3].image}>
            </CoreConcepts>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
