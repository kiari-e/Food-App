import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css"
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header />
        <Hero />
      </div>
      <div>
        <Menu />
      </div>
    </div>
    );
}

export default App;
