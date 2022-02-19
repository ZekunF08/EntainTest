import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import {RootState} from '../store';
import {
  TOGGLE_GREYHOUND,
  TOGGLE_HARNESS,
  TOGGLE_HORSE,
} from '../store/reducers/raceData/types';

const RaceSelector: React.FC = () => {
  const dispatch = useDispatch();
  const toggleHorse = useSelector(
    (state: RootState) => state.raceData.showHorse,
  );
  const setToggleHorse = (newValue: Boolean) => {
    dispatch({type: TOGGLE_HORSE, payload: newValue});
  };
  const toggleGreyhound = useSelector(
    (state: RootState) => state.raceData.showGreyhound,
  );
  const setToggleGreyhound = (newValue: Boolean) => {
    dispatch({type: TOGGLE_GREYHOUND, payload: newValue});
  };
  const toggleHarness = useSelector(
    (state: RootState) => state.raceData.showHarness,
  );
  const setToggleHarness = (newValue: Boolean) => {
    dispatch({type: TOGGLE_HARNESS, payload: newValue});
  };
  return (
    <View style={styles.selectorContainer}>
      <CheckComponent
        label="Horse"
        toggleCheckBox={toggleHorse}
        setToggleCheckBox={setToggleHorse}
      />
      <CheckComponent
        label="Greyhound"
        toggleCheckBox={toggleGreyhound}
        setToggleCheckBox={setToggleGreyhound}
      />
      <CheckComponent
        label="Harness"
        toggleCheckBox={toggleHarness}
        setToggleCheckBox={setToggleHarness}
      />
    </View>
  );
};

interface CheckComponentProps {
  toggleCheckBox: boolean;
  setToggleCheckBox: Function;
  label: string;
}
const CheckComponent: React.FC<CheckComponentProps> = ({
  toggleCheckBox,
  setToggleCheckBox,
  label,
}) => {
  return (
    <View style={styles.sectionContainer}>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
      <Text style={styles.sectionTitle}>{label}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 3,
    marginBottom: 5,
  },
  sectionTitle: {
    paddingLeft: 10,
    fontSize: 16,
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
  selectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});
export default RaceSelector;
