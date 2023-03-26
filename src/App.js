import { Route, Routes } from "react-router-dom";
//import './App.css';
import SocialMedia from "./components/SocialMedia";
import Home from "./components/home/Home";
import GraphicDesing from "./components/GraphicDesing";
import Dev from "./components/Dev";
import Contact from "./components/contact/Contact";
import "./globalStyle.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/socialmedia" element={<SocialMedia />} />
        <Route exact path="/desing" element={<GraphicDesing />} />
        <Route exact path="/dev" element={<Dev />} />
        <Route exact path="/contact" element={<Contact />} />

        {/* <Route exact path="/recipe" component={CreateRecipe} />
        <Route exact path="/recipes/:id" component={Detail} /> 
        <Route path={'*'} component={Error} /> */}
      </Routes>
    </div>
  );
}

export default App;
