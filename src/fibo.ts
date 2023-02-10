export const fibonacci = (n: number): number => {
  const cache: Record<number, number> = {};
  let misses = 0;
  const inner = (n: number): number => {
    if (n <= 1) {
      return n;
    }
    if (cache[n] === undefined) {
      cache[n] = inner(n - 1) + inner(n - 2);
      misses += 1;
    }
    return cache[n];
  };
  const value = inner(n);
  console.debug(`Misses for ${n}: ${misses}`);
  return value;
};
