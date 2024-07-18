import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom'
import MainPage from './pages/Main.tsx'
import ErrorBoundary from './ErrorBoundary.tsx'
import PageNotFound from './pages/404.tsx'
import DetailsOutlet from './components/people/DetailsOutlet.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorBoundary />}>
      <Route path="/" element={<MainPage />}>
        <Route path="details/:name" element={<DetailsOutlet />} />
      </Route>
      <Route path="/page-not-found" element={<PageNotFound />} />
      <Route path="*" element={<Navigate to={'/page-not-found'} />} />
    </Route>,
  ),
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
