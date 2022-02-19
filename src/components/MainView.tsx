import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
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
  }, [toggleHorse, toggleGreyhound, toggleHarness, displayData]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    if (displayData.length <= 5) {
      getRacing().then(response => {
        var racingData: RacingData = response.data;
        var summaries = Object.values(racingData.race_summaries);
        summaries = summaries.sort(
          (a, b) => a.advertised_start.seconds - b.advertised_start.seconds,
        );
        setRaceSummary(summaries);
        dispatch({type: UPDATE_RACE_DATA, payload: summaries});
      });
    }
  }, [displayData, dispatch]);

  const renderItem: ListRenderItem<RaceSummary> = ({item}) => {
    return <RaceItem raceSummary={item} />;
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.sectionContainer}>
        <View style={styles.header}>
          <Text style={styles.headText}>Welcome to Entain Test App</Text>
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
    flexDirection: 'column',
    height: '100%',
  },
  header: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  headText: {
    fontWeight: '700',
    fontSize: 24,
  },
});

export default MainView;
