import React, { useState } from 'react';

import Header from './components/Header/Header';
import ResultsTable from './components/ResultsTable/ResultsTable';
import UserInput, { UserInputType } from './components/UserInput/UserInput';

function App() {
  const [userInput, setUserInput] = useState<any>(null);

  const calculateHandler = (userInput: UserInputType) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlyContribution;
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />
      <ResultsTable />
    </div>
  );
}

export default App;
