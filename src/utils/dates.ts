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

export const initializeScheduleMap = (slotLength: number) => {
  return getRangeHours(slotLength).reduce((acc, range) => {
    acc[range[0]] = 0;
    return acc;
  }, {});
};

export const initializedSchedule = initializeScheduleMap(2);
export const get2HoursSchedule = () => ({ ...initializedSchedule });

export const closestNumber = (number, divider) => {
  const c1 = number - (number % divider);
  const c2 = number + divider - (number % divider);
  if (number - c1 > c2 - number) {
    return c2;
  } else {
    return c1;
  }
};
