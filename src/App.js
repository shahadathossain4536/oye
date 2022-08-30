import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Bannar from "./components/Bannar/Bannar";
import ProfessionalsWork from "./components/ProfessionalsWork/ProfessionalsWork";

function App() {
  return (
    <div className="">
      <Navbar />
      <Bannar />
      <ProfessionalsWork />
    </div>
  );
}

export default App;
