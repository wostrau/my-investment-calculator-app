import React, { useState, FormEvent } from 'react';

import classes from './UserInput.module.css';

export type UserInputType = typeof initialUserInput;
const initialUserInput = {
  currentSavings: 10000,
  yearlyContribution: 1200,
  expectedReturn: 7,
  duration: 10,
};

const UserInput: React.FC<{ onCalculate: (arg: UserInputType) => void }> = (
  props
) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (identifier: string, value: string) => {
    setUserInput((prevState) => ({ ...prevState, [identifier]: +value }));
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.inputGroup}>
        <p>
          <label htmlFor='currentSavings'>Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler('currentSavings', event.currentTarget.value)
            }
            type='number'
            id='currentSavings'
            value={userInput.currentSavings}
          />
        </p>
        <p>
          <label htmlFor='yearlyContribution'>Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler(
                'yearlyContribution',
                event.currentTarget.value
              )
            }
            type='number'
            id='yearlyContribution'
            value={userInput.yearlyContribution}
          />
        </p>
      </div>
      <div className={classes.inputGroup}>
        <p>
          <label htmlFor='expectedReturn'>
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputChangeHandler('expectedReturn', event.currentTarget.value)
            }
            type='number'
            id='expectedReturn'
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input
            onChange={(event) =>
              inputChangeHandler('duration', event.currentTarget.value)
            }
            type='number'
            id='duration'
            value={userInput.duration}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button type='reset' className={classes.buttonAlt} onClick={resetHandler}>
          Reset
        </button>
        <button type='submit' className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
