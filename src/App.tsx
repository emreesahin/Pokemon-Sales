import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PokemonList from "./pages/PokemonList";
import PokemonDetails from "./pages/PokemonDetails";
import { BrowserRouter, useRoutes } from "react-router-dom";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/pokemon-list", element: <PokemonList /> },
    { path: "/pokemon-details/:id", element: <PokemonDetails /> },
  ]);
  return routes;
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
