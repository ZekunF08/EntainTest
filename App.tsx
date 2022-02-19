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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {getRacing} from './src/api/getRacing';
import RaceItem from './src/components/RaceItem';
import {
  RacingData,
  RaceSummaries,
  RaceSummary,
} from './src/interfaces/racingData.interface';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

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
      const summaries = racingData.race_summaries;
      console.log('summarry', summaries[nextTogo[0]]);
      console.log('summary array', Object.values(summaries));
      setRaceSummary(Object.values(summaries));
      console.log('summaries', summaries);
    });
    // return () => {
    //   second;
    // };
  }, []);
  const renderItem: ListRenderItem<RaceSummary> = ({item}) => {
    console.log('item', item);
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
          <FlatList<RaceSummary> data={raceSummary} renderItem={renderItem} />

          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> KE shi wo shui ai
            de jiu shi bai
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
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

export default App;
