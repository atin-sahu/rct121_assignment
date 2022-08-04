import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider as ReduxProvider } from "react-redux";
import { Store } from "./redux/Store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReduxProvider store={Store}>
    <App />
  </ReduxProvider>
)
