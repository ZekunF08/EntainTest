export const RaceCategory = {
  GreyhoundRacing: '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
  HarnessRacing: '161d9be2-e909-4326-8c2c-35ed71fb460b',
  HorseRacing: '4a2788f8-e825-4d36-9894-efd4baf1cfae',
};

export function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
