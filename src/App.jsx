const descriptions = ['fundamental', 'core', 'crucial']

function random(max){
  return Math.floor(Math.random() * (max + 1))
}


function Header(){
   const des = descriptions[random(2)]

  return(
  <header>
  <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
  <h1>React Essentials</h1>
  <p>
    {des} React concepts you will need for almost any app you are
    going to build!
  </p>
</header>)
}


function App() {
  return (
    <div>
    <Header></Header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
