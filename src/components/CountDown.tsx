import React, {useState, useEffect} from 'react';
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
interface CountDownProps {
  timeLeft: number;
}
const CountDown: React.FC<CountDownProps> = ({timeLeft}) => {
  const [timerCount, setTimer] = useState(timeLeft);

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
