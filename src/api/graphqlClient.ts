import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';

import { message } from 'antd';

const csrfToken = localStorage.getItem('csrf_token');
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message: msg }) => {
      console.log(`[GraphQL error]: Message: ${msg}`);
      message.error(`[GraphQL error]: Message: ${msg}`);
    });
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    message.error(`[Network error]: ${networkError}`);
  }
});
const httpLink = new HttpLink({
  uri: `${import.meta.env.VITE_API_HOST}/graphql`,
  headers: {
    'x-csrf-token': csrfToken,
    'x-500px-source': window.location.href,
  } as Record<string, string>,
  credentials: 'include',
});
const retryLink = new RetryLink({
  attempts: {
    max: 5,
  },
  delay: {
    initial: 1000,
    max: 30000,
    jitter: true,
  },
});

const client = new ApolloClient({
  link: from([retryLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default client;
