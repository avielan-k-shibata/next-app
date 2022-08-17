import { ApolloClient,createHttpLink, InMemoryCache } from "@apollo/client";

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: `https://strapi-dep.herokuapp.com/graphql`,
  });
  console.log(process.env.NEXT_PURLIC_DB_HOST)
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: `Bearer 5d2a11c3f72e4c353c3e302cf9045acc6b20ae440abe082ffeaacafc39e86be88c7e955aef56e712853a74a473ba7e28a5b9b5f730476408c35fd00a25ffa2a7f669a11a52837474bdc7efc0675cb2055132b058bb131266ff6eb90dadf8658974190602c938c88fc9bb88f5045a5972741472ee665e4ec28dfe8c0e5d065f60`,
      }
    }
  });
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;