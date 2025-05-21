import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarLayout from "./components/NavBarLayout";
import HomePage from "./components/Homepage";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Products from "./components/Products";

function App() {
  return (
    <BrowserRouter basename="/sadans-landing-page/">
      <Routes>
        <Route path="/" element={<NavbarLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactForm />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
