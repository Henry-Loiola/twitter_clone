/*import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import Login from './/components/Login'

function App() {
    return (
        <>
            <Login />
            <Layout />

            <GlobalStyles />
        </>
    )
}

export default App;
*/
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import Login from "./components/Login";

function App() {
  // Estado que controla se o usuário está logado
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <Router>
      <GlobalStyles />
      <Routes>
        {/* Rota de login */}
        <Route
          path="/"
          element={<Login onLoginSuccess={() => setIsAuthenticated(true)} />}
        />
        
        {/* Rota da página principal (Layout) */}
        <Route
          path="/home"
          element={isAuthenticated ? <Layout /> : <Login onLoginSuccess={() => setIsAuthenticated(true)} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
