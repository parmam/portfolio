import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import { AxiosInterceptor } from '@libs/interceptors/axios.interceptor';
import { Provider } from 'react-redux';
import store from '@store/store';
import { router } from './routes/routes'
import MenuProvider from './contexts/MenuContext';


AxiosInterceptor()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MenuProvider>
        <RouterProvider router={router} fallbackElement={<div>loading...</div>} />
      </MenuProvider>
    </Provider>
  </React.StrictMode>,
)
