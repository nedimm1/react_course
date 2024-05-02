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

function CoreConcepts({title, description, image}){
  return(
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
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
      </main>
    </div>
  );
}

export default App;
