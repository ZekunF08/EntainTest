import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ImagePropsBase,
  View,
} from 'react-native';
import {RaceSummary} from '../interfaces/racingData.interface';
import {timeCalculator} from '../utils/timeCalculator';
import CountDown from './CountDown';
interface RaceItemProps {
  raceSummary: RaceSummary;
}
const RaceItem: React.FC<RaceItemProps> = ({raceSummary}) => {
  const timeLeft = timeCalculator(raceSummary.advertised_start.seconds);
  return (
    <View style={styles.item}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{`${raceSummary.meeting_name}`}</Text>
        <Text style={styles.title}>{`${raceSummary.race_number}`}</Text>
      </View>
      <View>
        <CountDown timeLeft={timeLeft} raceId={raceSummary.race_id} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    flexDirection: 'row',
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
  infoContainer: {
    flexDirection: 'column',
    flex: 1,
  },
});

export default RaceItem;
