import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import store from './app/store.ts'
import { Provider } from 'react-redux'
import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel } from '@radix-ui/themes';
import {KindeProvider} from "@kinde-oss/kinde-auth-react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme accentColor="blue" grayColor="sand" radius="large" scaling="100%">
        <KindeProvider
          clientId={import.meta.env.VITE_Kinde_Client_Id}
          domain="https://streamzone.kinde.com"
          redirectUri="http://localhost:5173"
          logoutUri="http://localhost:5173"
        >
          <App />
        </KindeProvider>
        <ThemePanel />
      </Theme>
    </Provider>
  </React.StrictMode>,
)
