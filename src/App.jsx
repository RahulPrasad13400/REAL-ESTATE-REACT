import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import "./App.css"
import Companies from "./Components/Companies/Companies";
import Residencies from "./Components/Residencies/Residencies";
function App() {
  return <div className="app">
    <div className="app__container">
      <div className="white-gradient" />        {/*left side ile white color ine vendi*/}
      <Header />
      <Hero />
    </div>
      <Companies />
      <Residencies />
  </div>
}

export default App;
