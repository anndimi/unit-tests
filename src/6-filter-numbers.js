export const filterNumbers = (array, largerThan) => {
  const smallerThan = (value) => value <= largerThan;
  return array.filter(smallerThan);
};
