import { useRoutes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import client from '../api/graphqlClient';
import RootRoute from '../router/rootRute';

import './App.css';

function Routes() {
  return useRoutes(RootRoute);
}
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
