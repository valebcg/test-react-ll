import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import PizzaProvider from "./context/PizzaProvider";
import DetailsPizza from "./views/DetailsPizza";
import Home from "./views/Home";
import Cart from "./views/Cart"


function App() {
  return (
    <div className="App">
      <PizzaProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<DetailsPizza />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
      </BrowserRouter>
      </PizzaProvider>
    </div>
  );
}

export default App;
