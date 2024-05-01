import reactImg from "./assets/react-core-concepts.png"
import  componentsImg from "./assets/components.png"

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
            
            title="Components" description="Building blocks of UI"> image={componentsImg}
            
            </CoreConcepts>

            <CoreConcepts>
            </CoreConcepts>
            
            <CoreConcepts>
            </CoreConcepts>

            <CoreConcepts>
            </CoreConcepts>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
