import React from 'react'
import ComposeContext from './context/ComposeContext';
import AppRouter from './routes/AppRouter';
import UiState from './states/UiState';

const App = () => {
  return (
    <>
    <ComposeContext>
      <UiState>
          <AppRouter />
      </UiState>
    </ComposeContext>
      
    </>
  )
}

export default App