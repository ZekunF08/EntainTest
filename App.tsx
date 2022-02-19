/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  ListRenderItem,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {Provider, useSelector} from 'react-redux';
import {getRacing} from './src/api/getRacing';
import MainView from './src/components/MainView';
import RaceItem from './src/components/RaceItem';
import {
  RacingData,
  RaceSummaries,
  RaceSummary,
} from './src/interfaces/racingData.interface';
import {store, RootState} from './src/store';
import {initialState} from './src/store/reducers/raceData/raceData';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [nextToGo, setNextToGo] = useState<string[] | null>();
  const [raceSummary, setRaceSummary] = useState<RaceSummary[] | null>();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    getRacing().then(response => {
      console.log('data', response);
      var racingData: RacingData = response.data;
      const nextTogo = racingData.next_to_go_ids;
      setNextToGo(nextTogo);
      console.log('nextTogo', nextTogo);
      var summaries = Object.values(racingData.race_summaries);
      summaries = summaries.sort(
        (a, b) => a.advertised_start.seconds - b.advertised_start.seconds,
      );
      setRaceSummary(summaries);
      console.log('summaries', summaries);
    });
    // return () => {
    //   second;
    // };
  }, []);
  useEffect(() => {
    if (raceSummary) {
      raceSummary.sort(
        (a, b) => a.advertised_start.seconds - b.advertised_start.seconds,
      );
    }
  }, [raceSummary]);

  return (
    <Provider store={store}>
      <MainView />
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
