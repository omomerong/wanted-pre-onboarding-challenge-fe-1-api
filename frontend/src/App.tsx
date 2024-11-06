import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homescreen from "./screens/Homescreen";
import Registerscreen from "./screens/Registerscreen";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homescreen />,
    },
    {
      path: "/auth",
      element: <Registerscreen />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
