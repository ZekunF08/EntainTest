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
import {useSelector, useDispatch} from 'react-redux';
import {getRacing} from '../api/getRacing';
import RaceItem from './RaceItem';
import {RacingData, RaceSummary} from '../interfaces/racingData.interface';
import {RootState} from '../store';
import {UPDATE_RACE_DATA} from '../store/reducers/raceData/types';

const MainView: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [nextToGo, setNextToGo] = useState<string[] | null>();
  const [raceSummary, setRaceSummary] = useState<RaceSummary[] | null>();
  const dispatch = useDispatch();
  const displayData = useSelector(
    (state: RootState) => state.raceData.raceDataSet,
  );

  console.log('displayData', displayData);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    getRacing().then(response => {
      var racingData: RacingData = response.data;
      const nextTogo = racingData.next_to_go_ids;
      setNextToGo(nextTogo);
      var summaries = Object.values(racingData.race_summaries);
      summaries = summaries.sort(
        (a, b) => a.advertised_start.seconds - b.advertised_start.seconds,
      );
      setRaceSummary(summaries);
      dispatch({type: UPDATE_RACE_DATA, payload: summaries});
    });
    // return () => {
    //   second;
    // };
  }, []);
  //   useEffect(() => {
  //     if (raceSummary) {
  //       raceSummary.sort(
  //         (a, b) => a.advertised_start.seconds - b.advertised_start.seconds,
  //       );
  //     }
  //   }, [raceSummary]);

  const renderItem: ListRenderItem<RaceSummary> = ({item}) => {
    return <RaceItem raceSummary={item} />;
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <FlatList<RaceSummary>
            keyExtractor={item => item.race_id}
            data={displayData?.slice(0, 5)}
            renderItem={renderItem}
            maxToRenderPerBatch={5}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
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

export default MainView;
