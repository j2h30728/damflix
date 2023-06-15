import { QueryClientProvider } from '@tanstack/react-query';
import firebase from 'firebase/compat/app';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { DarkModeContextProvider } from './contexts/darkModeContext.tsx';
import './index.css';
import router from './router/index.tsx';
import queryClient from './utils/queryClient.ts';

console.log(firebase);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DarkModeContextProvider>
        <RouterProvider router={router} />
      </DarkModeContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
