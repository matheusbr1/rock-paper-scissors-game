import React from 'react';
import './App.css';

import AppProvider from './contexts/AppContext'

import Game from './pages/game'

function App() {
  return (
    <AppProvider>
      <Game />
    </AppProvider>
  )
}

export default App;