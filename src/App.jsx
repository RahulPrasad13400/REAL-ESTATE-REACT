import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import "./App.css"
import Companies from "./Components/Companies/Companies";
import Residencies from "./Components/Residencies/Residencies";
import Value from "./Components/value/value";
import Contact from "./Components/Contact/Contact";
function App() {
  return <div className="app">
    <div className="app__container">
      <div className="white-gradient" />        {/*left side ile white color ine vendi*/}
      <Header />
      <Hero />
    </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
  </div>
}

export default App;
