import React from 'react'
import AppRouter from './routes/AppRouter';
import UiState from './states/UiState';

const App = () => {
  return (
    <>
      <UiState>
        <AppRouter />
      </UiState>
    </>
  )
}

export default App