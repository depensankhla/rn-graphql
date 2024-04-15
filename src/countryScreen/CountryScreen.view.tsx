import {FlatList, Text, View} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import React from 'react';
import {styles} from './CountryScreen.style';

const JOBS_QUERY = gql`
  query ListCountriesThatUseUSD {
    countries(filter: {currency: {eq: "USD"}}) {
      code
      name
      languages {
        code
        name
      }
    }
  }
`;

const CountryScreenView = () => {
  const {data, loading, error} = useQuery(JOBS_QUERY);

  if (loading) {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.infoText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.viewContainer}>
        <Text style={[styles.infoText, styles.errorText]}>
          Error: {error.message}
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      style={styles.list}
      data={data.countries}
      renderItem={({item}) => {
        return (
          <View style={styles.jobCard}>
            <View style={styles.jobInfo}>
              <Text style={styles.jobTitle}>{item?.name}</Text>
              <Text style={styles.jobCompany}>{item?.code}</Text>
            </View>
          </View>
        );
      }}
      keyExtractor={item => item?.code}
    />
  );
};

export default CountryScreenView;
