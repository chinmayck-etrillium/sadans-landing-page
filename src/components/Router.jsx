// components/Router.jsx
import { createBrowserRouter } from "react-router-dom";
import NavbarLayout from "./NavBarLayout";
import HomePage from "./Homepage";
import About from "./About";
import ContactForm from "./ContactForm";
import Products from "./Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <ContactForm />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);

export default router;
