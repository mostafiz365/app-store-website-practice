import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/Routes'
import AppContextApi from './context/AppContextApi'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextApi>
      <RouterProvider router={router}></RouterProvider>
    </AppContextApi>
  </StrictMode>,
)
