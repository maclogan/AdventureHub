import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import { PrivateRoute } from './components/utils/PrivateRoute';
import Card from './components/Card';
import { ThemeProvider } from 'styled-components';
import {defaultTheme } from './theme'


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<PrivateRoute />}>
            <Route element={<Card />} path="/test"/>
          </Route>
        </Routes>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
