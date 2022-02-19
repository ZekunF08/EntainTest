import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ImagePropsBase,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {RaceSummary} from '../interfaces/racingData.interface';
import {REMOVE_RACE_DATA} from '../store/reducers/raceData/types';
import {timeCalculator} from '../utils/timeCalculator';
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
      console.log('timerCount', timerCount, raceId);
      dispatch({type: REMOVE_RACE_DATA, payload: raceId});
    }
  }, [timerCount]);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(lastTimerCount => {
        // lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval);
  }, []);

  return (
    <View
      style={{
        height: 60,
        width: 60,
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 5000,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{timerCount}</Text>
    </View>
  );
};

export default CountDown;
