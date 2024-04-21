import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Router from './Router';
import AuthProvider from './Provider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import WebTheme from './Utils/WebTheme';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WebTheme>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={Router} />
        </QueryClientProvider>
        <Toaster />
      </AuthProvider>
    </WebTheme>
  </React.StrictMode>,
)
