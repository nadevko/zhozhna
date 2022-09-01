import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Header from './components/Header'
import reportWebVitals from './reportWebVitals'

/**
 *
 */
export default function App(): ReactElement {
  return (
    <React.StrictMode>
      <Header />
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.body).render(<App />)
reportWebVitals(console.log)
