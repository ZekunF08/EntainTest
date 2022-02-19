import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {REMOVE_RACE_DATA} from '../store/reducers/raceData/types';
import {fancyTimeFormat} from '../utils/timeCalculator';
interface CountDownProps {
  timeLeft: number;
  raceId: string;
}
const CountDown: React.FC<CountDownProps> = ({timeLeft, raceId}) => {
  const [timerCount, setTimer] = useState(timeLeft);
  const dispatch = useDispatch();

  //remove from list when start over 1 min
  useEffect(() => {
    if (timerCount <= -60) {
      dispatch({type: REMOVE_RACE_DATA, payload: raceId});
    }
  }, [timerCount, raceId, dispatch]);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(lastTimerCount => {
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.countDownContainer}>
      <Text style={styles.timeText}>{fancyTimeFormat(timerCount)}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  countDownContainer: {
    height: 60,
    width: 60,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 5000,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontWeight: '700',
    fontSize: 18,
  },
});
export default CountDown;
