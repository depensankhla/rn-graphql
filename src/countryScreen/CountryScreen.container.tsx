import React from 'react';
import {ApolloProvider} from '@apollo/client';
import CountryScreenView from './CountryScreen.view';
import client from './CountryScreen.client';

const CountryScreen = () => {
  return (
    <ApolloProvider client={client}>
      <CountryScreenView />
    </ApolloProvider>
  );
};

export default CountryScreen;
