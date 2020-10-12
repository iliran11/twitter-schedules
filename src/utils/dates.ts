const NUMBER_OF_HOURS_IN_DAY = 24;

export const getRangeHours = (hoursIncrement: number) => {
  let i = 0;
  const result = [];
  while (i < NUMBER_OF_HOURS_IN_DAY) {
    result.push([i, i + hoursIncrement]);
    i += hoursIncrement;
  }
  return result;
};
