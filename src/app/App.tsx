import { useRoutes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

import client from '../api/graphqlClient';
import RootRoute from '../router/rootRute';

import './App.css';

function Routes() {
  return useRoutes(RootRoute);
}
function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ApolloProvider>
    </ConfigProvider>
  );
}

export default App;
