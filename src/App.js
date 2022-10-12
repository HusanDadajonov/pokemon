import Home from "./Pages/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SinglePokemon from "./Pages/SinglePokemon/SinglePokemon";
 
function App() {

  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<SinglePokemon />} />
       </Routes>
      </div>
    </BrowserRouter>
  
  );
}

export default App;
