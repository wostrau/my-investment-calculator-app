import React, { useState, FormEvent } from 'react';

const initialUserInput = {
  currentSavings: 10000,
  yearlyContribution: 1200,
  expectedReturn: 7,
  duration: 10,
};

const UserInput: React.FC = () => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (identifier: string, value: string) => {
    setUserInput((prevState) => ({ ...prevState, [identifier]: value }));
  };

  return (
    <form onSubmit={submitHandler} className='form'>
      <div className='input-group'>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler('current-savings', event.currentTarget.value)
            }
            type='number'
            id='current-savings'
            value={userInput.currentSavings}
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler(
                'yearly-contribution',
                event.currentTarget.value
              )
            }
            type='number'
            id='yearly-contribution'
            value={userInput.yearlyContribution}
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label htmlFor='expected-return'>
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputChangeHandler('expected-return', event.currentTarget.value)
            }
            type='number'
            id='expected-return'
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
      <p className='actions'>
        <button type='reset' className='buttonAlt' onClick={resetHandler}>
          Reset
        </button>
        <button type='submit' className='button'>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
