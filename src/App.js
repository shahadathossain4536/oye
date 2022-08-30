import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Bannar from "./components/Bannar/Bannar";
import ProfessionalsWork from "./components/ProfessionalsWork/ProfessionalsWork";
import Faq from "./components/Faq/Faq";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="">
      <Navbar />
      <Bannar />
      <ProfessionalsWork />
      <Faq />
      <Services />
    </div>
  );
}

export default App;
