// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Navbar />
      </div>
    </>
  );
}
export default App;
