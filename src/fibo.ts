export const fibonacci = (n: number): number => {
  const cache: Record<number, number> = {};
  const inner = (n: number): number => {
    if (n <= 1) {
      return n;
    }
    if (cache[n] === undefined) {
      cache[n] = inner(n - 1) + inner(n - 2);
    }
    return cache[n];
  };
  return inner(n);
};
