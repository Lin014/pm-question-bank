import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Home from './pages/home';
import Questions from './pages/questions';
import Manage from './pages/manage';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/manage", element: <Manage /> },
  { path: "/questions", element: <Questions /> },
])

function App() {
  return (
    <div className="App">
      <RouterProvider
        router={router}
      />
    </div>
  );
}

export default App;
