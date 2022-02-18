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

// interface CustomButtonProps {
//   raceSummary?: RaceSummary;
// }
const sample: RaceSummary = {
  race_id: 'd9152da3-c20c-4409-9f70-e0508ae38956',
  race_name: 'Shepparton News (200+Rank)',
  race_number: 4,
  meeting_id: '8e0254f5-2691-487b-b69f-9dabedfc2440',
  meeting_name: 'Shepparton',
  category_id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
  advertised_start: {
    seconds: 1645226340,
  },
  race_form: {
    distance: 385,
    distance_type: {
      id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
      name: 'Metres',
      short_name: 'm',
    },
    distance_type_id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
    track_condition: {
      id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
      name: 'Good',
      short_name: 'good',
    },
    track_condition_id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
    weather: {
      id: '08e5f78c-1a36-11eb-9269-cef03e67f1a3',
      name: 'FINE',
      short_name: 'fine',
      icon_uri: 'FINE',
    },
    weather_id: '08e5f78c-1a36-11eb-9269-cef03e67f1a3',
    race_comment:
      'DEADLY EXPRESS (1) has some solid form under his belt and proved too classy last time to win by 2.75 lengths at Geelong in a handy 22.48 beating Dancing Cassie. Looks to have an edge on most of these. ALL INN JASPER (6) has shown good improvement at his last two starts, rewarded with a win last time at this track over 385m. Leading player again. OH SUZIE (4) has raced below best last couple, the latest managing only 7th (26.39) last time in a Grade 5 at this track. Has a strong winning record here at this journey including one wins. Better than the latest run and deserves another chance. GARTH VADER (8) placed last time out so worth considering.',
    additional_data:
      '{"gait":"Gallop","classes":["MIXED 4/5"],"prizes":[{"type":"1st","value":"1000"},{"type":"2nd","value":"290"},{"type":"3rd","value":"145"},{"type":"4th","value":"80"}],"start_time":"19/02/2022 08:49:00 AM"}',
    generated: 1,
    silk_base_url: 'drr38safykj6s.cloudfront.net',
    race_comment_alternative:
      'DEADLY EXPRESS (1) has some solid form under his belt and proved too classy last time to win by 2.75 lengths at Geelong in a handy 22.48 beating Dancing Cassie. Looks to have an edge on most of these. ALL INN JASPER (6) has shown good improvement at his last two starts, rewarded with a win last time at this track over 385m. Leading player again. OH SUZIE (4) has raced below best last couple, the latest managing only 7th (26.39) last time in a Grade 5 at this track. Has a strong winning record here at this journey including one wins. Better than the latest run and deserves another chance. GARTH VADER (8) placed last time out so worth considering.',
  },
  venue_id: 'ff79d849-5d27-4841-83f8-f25629e71420',
  venue_name: 'Shepparton',
  venue_state: 'VIC',
  venue_country: 'AUS',
};
const RaceItem: React.FC = () => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{sample.race_name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default RaceItem;
