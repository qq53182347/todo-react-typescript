import React from 'react';
import ReactDOM from 'react-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from "@apollo/client";
import './index.css';
import App from './App';
import {ItemsContextProvider} from "./graphql/dataItemProvider";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <ItemsContextProvider>
            <App />
        </ItemsContextProvider>
    </ApolloProvider>,
  document.getElementById('root')
);
