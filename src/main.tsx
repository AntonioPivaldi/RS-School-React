import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { store } from './store/index.ts'
import ThemeProvider from './context/ThemeProvider.tsx'
import MainPage from './pages/Main.tsx'
import PageNotFound from './pages/404.tsx'
import ErrorBoundary from './ErrorBoundary.tsx'
import DetailsOutlet from './components/people/DetailsOutlet.tsx'
import './index.css'

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
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
