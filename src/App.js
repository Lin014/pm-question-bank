import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './pages/home';
import { Quesition } from './pages/questions';
import { Manage } from './pages/manage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const router = createBrowserRouter([
      { path: "/", element: <Home /> },
      { path: "/manage", element: <Manage /> },
      { path: "/quesitions", element: <Quesition /> }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
