import { useRoutes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import RootRoute from '../router/rootRute';

import './App.css';

function Routes() {
  return useRoutes(RootRoute);
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
