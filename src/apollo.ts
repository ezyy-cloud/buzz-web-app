// Apollo
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'


const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  uri: 'https://main--ezyy-cloud-supergraph.apollographos.net/graphql',

  // Provide some optional constructor fields
  name: 'buzz-webapp-client',
  version: '1.0',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
})

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

export { apolloProvider, apolloClient };