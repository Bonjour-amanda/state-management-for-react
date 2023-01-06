import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
// import {Provider} from 'react-redux';
import {store} from './Redux/store';
import { RecoilRoot } from 'recoil';
import { Provider } from 'jotai'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* Redux */}
    {/* <Provider store={store}>
      <App />
    </Provider> */}

    {/* Recoil */}
    {/* <RecoilRoot>
      <App />
    </RecoilRoot> */}

    {/* Jotai  */}
    {/* <Provider>
      <App />
    </Provider> */}

    {/* Context */}
    <App />

    
  </React.StrictMode>,
)
