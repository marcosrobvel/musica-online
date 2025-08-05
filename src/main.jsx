import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './sass/styles.scss';
import {HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Provider } from 'react-redux';
import { store } from './app/store';
import { DrumsPercussionPage } from './pages/DrumsPercussionPage';
import { GuitarsBassPage } from './pages/GuitarsBassPage';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
        <HashRouter>
          <Routes>
              <Route element={<Layout/>}>
                <Route path='/' element={< Home />} />
                <Route path='/guitarrasybajos' element={< GuitarsBassPage />} />
                <Route path='/bateriasypercusion' element={< DrumsPercussionPage />} />
              </Route>
          </Routes>
        </HashRouter>
      </Provider>
)
