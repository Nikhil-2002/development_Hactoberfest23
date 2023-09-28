// pages/index.js
import Head from "next/head";
import FibonacciCalculator from "../components/FibonacciCalculator";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fibonacci Calculator</title>
        <meta name="description" content="Fibonacci Sequence Calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Fibonacci Sequence Calculator</h1>
        <FibonacciCalculator />
      </main>
    </div>
  );
}
