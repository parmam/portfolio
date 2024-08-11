import ErrorPage from "@pages/ErrorPage";
import HomePage from "@pages/HomePage";
import RickAndMortyPage from "@pages/RickAndMortyPage";
import WelcomePage from "@pages/WelcomePage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomePage />,
      errorElement: <ErrorPage />,
      loader: () => <div>loading...</div>,
  
    },
    {
      path: "/home",
      element: <HomePage />,
      errorElement: <ErrorPage />,
      loader: () => <div>loading...</div>,
    },
    {
      path: "/rick-and-morty",
      element: <RickAndMortyPage />,
      loader: () => <div>loading...</div>,
    },
  ]);