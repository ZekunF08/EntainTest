export const timeCalculator = (unixTime: number): number => {
  const currentTime = Math.round(new Date().getTime() / 1000);
  return unixTime - currentTime;
};
