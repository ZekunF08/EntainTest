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

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector, useDispatch} from 'react-redux';
import {getRacing} from '../api/getRacing';
import RaceItem from './RaceItem';
import {RacingData, RaceSummary} from '../interfaces/racingData.interface';
import {RootState} from '../store';
import {UPDATE_RACE_DATA} from '../store/reducers/raceData/types';
import RaceSelector from './RaceSelector';
import {RaceCategory} from '../assests/RaceCategory';

const MainView: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [nextToGo, setNextToGo] = useState<string[] | null>();
  const [raceSummary, setRaceSummary] = useState<RaceSummary[] | null>();
  const dispatch = useDispatch();

  const displayData = useSelector(
    (state: RootState) => state.raceData.raceDataSet,
  );
  const toggleHorse = useSelector(
    (state: RootState) => state.raceData.showHorse,
  );
  const toggleGreyhound = useSelector(
    (state: RootState) => state.raceData.showGreyhound,
  );
  const toggleHarness = useSelector(
    (state: RootState) => state.raceData.showHarness,
  );

  useEffect(() => {
    if (displayData.length === 0) {
      return;
    }
    if (toggleHorse && toggleGreyhound && toggleHarness) {
      setRaceSummary(displayData);
    }
    var newDisplayData = displayData.filter(x => {
      if (toggleGreyhound && x.category_id === RaceCategory.GreyhoundRacing) {
        return true;
      }
      if (toggleHarness && x.category_id === RaceCategory.HarnessRacing) {
        return true;
      }
      if (toggleHorse && x.category_id === RaceCategory.HorseRacing) {
        return true;
      }
      return false;
    });
    setRaceSummary(newDisplayData);
    // return () => {
    //   second;
    // };
  }, [toggleHorse, toggleGreyhound, toggleHarness, displayData]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    if (displayData.length <= 5) {
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
    }
    // return () => {
    //   dispatch({type: UPDATE_RACE_DATA, payload: []});
    // };
  }, [displayData]);
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
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
          flexDirection: 'column',
          height: '100%',
        }}>
        <View
          style={{
            height: 150,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 24}}>Welcome to Entain Test App</Text>
        </View>
        <RaceSelector />
        <FlatList<RaceSummary>
          keyExtractor={item => item.race_id}
          data={raceSummary?.slice(0, 5)}
          renderItem={renderItem}
          maxToRenderPerBatch={5}
        />
      </View>
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
