export const range = (limit: number, start = 0, step = 1) => {
  function* generateRange() {
    let gap = start - step;
    while (gap <= limit - step) yield (gap += step);
  }
  return {
    [Symbol.iterator]: generateRange,
  };
};
