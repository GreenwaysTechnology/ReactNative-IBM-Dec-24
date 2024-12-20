import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { store } from './App.jsx'
import { Provider } from 'react-redux'

//3. Create Provider Component pass store object as prop
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)
