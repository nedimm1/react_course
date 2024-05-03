import reactImg from "./assets/react-core-concepts.png"

const descriptions = ['fundamental', 'core', 'crucial']

function random(max){
  return Math.floor(Math.random() * (max + 1))
}

export default function Header(){
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