import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Provider } from 'react-redux';
import reduxStore from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
// import ErrorBoundary from './ErrorBoundary';
import Protected from './Protected';
// import Layout from './Layout';
// import Protected from './Protected';
// import ErrorBoundary from './ErrorBoundary';

// const Auth = React.lazy(() => import('myAuth/App'));
import Auth from 'myAuth/App'
const Todo = React.lazy(() => import('todos/Todo'));
// import Todo  from 'todos/Todo'
// import ErrorBoundary from './ErrorBoundary';
import Home from './Home';
import ErrorBoundary from './ErrorBoundary';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>

          <Route
         path='/todo'
            element={
              <Protected
                compo={
                  <ErrorBoundary fallback={<div>Failed to load Todo. Please try again later.</div>}>
                    //  <Suspense fallback={<div>Loading Todo...</div>}>
                      <Todo />
                    //  </Suspense>
                  // </ErrorBoundary>
                }
              />
            }
          />
          <Route
            path="/auth/*"
            element={
              <ErrorBoundary fallback={<div>Failed to load Auth. Please try again later.</div>}>
                // <Suspense fallback={<div>Loading Auth...</div>}>
                  <Auth />
                // </Suspense>
              // </ErrorBoundary>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={reduxStore}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
