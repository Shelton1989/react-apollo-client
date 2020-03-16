// Apollo imports
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const url = new HttpLink({
    uri: 'https://qnesj.sse.codesandbox.io/'
});

const cache = new InMemoryCache();

const client = new ApolloClient({
    link: url,
    cache: cache
});

export default client;