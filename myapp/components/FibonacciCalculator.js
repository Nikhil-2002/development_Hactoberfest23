// components/FibonacciCalculator.js
import { useState } from "react";
import styles from "../styles/main.module.css"; // Import the CSS module

export default function FibonacciCalculator() {
  const [inputNumber, setInputNumber] = useState("");
  const [fibonacciSequence, setFibonacciSequence] = useState([]);

  const calculateFibonacci = () => {
    const num = parseInt(inputNumber);

    if (!isNaN(num)) {
      const fib = [0, 1];

      for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
      }

      setFibonacciSequence(fib.slice(0, num + 1));
    } else {
      alert("Please enter a valid number.");
    }
  };

  return (
    <div className={styles.container}>
      {" "}
      {/* Apply styles using className */}
      <label htmlFor="number">Enter a number:</label>
      <input
        type="number"
        id="number"
        placeholder="Enter a number"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
      />
      <button onClick={calculateFibonacci} className={styles.calculateButton}>
        Calculate
      </button>
      <div id="result" className={styles.result}>
        {fibonacciSequence.length > 0 && (
          <p>
            Fibonacci Sequence up to {inputNumber}:{" "}
            {fibonacciSequence.join(", ")}
          </p>
        )}
      </div>
    </div>
  );
}
