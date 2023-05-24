import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";

import Main from "./layout/Main";
import Coin from "./pages/Coin/Coin";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import BdAddress from "./pages/Contact/BDAddress";
import UsAddress from "./pages/Contact/USAddress";
import CoinDetails from "./components/CoinDetails/CoinDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/coins",
          element: <Coin />,
        },
        {
          path: '/coin-details/:id',
          element: <CoinDetails />
        },
        {
          path: "/contact",
          element: <Contact />,
          children: [
            {
              path: 'bd-address',
              element: <BdAddress />
            },
            {
              path: 'us-address',
              element: <UsAddress />
            }
          ]
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
