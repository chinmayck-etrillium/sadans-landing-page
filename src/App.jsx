import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/Router";
import LoadingLogo from "./components/LoadingLogo";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingLogo />;
  }
  return <RouterProvider router={router} />;
}

export default App;
