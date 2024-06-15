import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home, Blog, Resume, Workspace, Contact } from "./pages/index.js"

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/resume",
      element: <Resume />,
    },
    {
      path: "/works",
      element: <Workspace />,
    },
    {
      path: "/blogs",
      element: <Blog />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
