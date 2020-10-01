import React from 'react';

export const generateNumber = () => Math.floor(Math.random() * 9);

export const numberAdder = (num1, num2) => num1 + num2;

function Adder() {
  const num1 = generateNumber();
  const num2 = generateNumber();
  return (
    <div>
      <h4>
        Number {num1} + Number {num2} is:
      </h4>
      <h3>{numberAdder(num1, num2)}</h3>
    </div>
  );
}

export default Adder;
