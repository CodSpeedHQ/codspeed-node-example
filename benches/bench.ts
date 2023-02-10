import { Bench } from "tinybench";
import { fibonacci } from "../src/fibo";

const bench = new Bench();

bench
  .add("fibo5", () => {
    fibonacci(5);
  })
  .add("fibo10", () => {
    fibonacci(10);
  })
  .add("fibo15", () => {
    fibonacci(15);
  });

await bench.run();

console.table(
  bench.tasks.map(({ name, result }) => ({
    "Task Name": name,
    "Average Time (us)": (result?.mean ?? 0) * 1000,
  }))
);
