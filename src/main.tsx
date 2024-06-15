import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import store from './app/store.ts'
import { Provider } from 'react-redux'
import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel } from '@radix-ui/themes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme accentColor="blue" grayColor="sand" radius="large" scaling="100%">
        <App />
        <ThemePanel />
      </Theme>
    </Provider>
  </React.StrictMode>,
)
