import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import client from "../apollo-client";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ApolloProvider>
  )
}

export default MyApp
