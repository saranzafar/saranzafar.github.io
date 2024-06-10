import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home, Blog } from "./pages/index.js"

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
