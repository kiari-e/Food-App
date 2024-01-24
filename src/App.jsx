import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css"
import Menu from "./components/Menu/Menu";
import Value from "./components/Value/Value";
import Contact from "./components/Contacts/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header />
        <Hero />
      </div>
        <Menu />
        <Value />
        <Contact />
        <GetStarted />
        <Footer />
    </div>
    );
}

export default App;
