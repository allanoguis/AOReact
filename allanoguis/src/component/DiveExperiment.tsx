import React, { useState } from "react";
import "../styles/App.css";

const DiveExperiment: React.FC = () => {
    const [myAge, setMyAge] = useState<number>(0);
    const [result, setResult] = useState<string>('');

// if age is a float, set it to whole number
    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        setMyAge(isNaN(value) ? 0 : value);
    };

    const handleClick = (): void => {
        try {
            if (typeof myAge !== 'number' || isNaN(myAge) || !Number.isInteger(myAge)) {
                throw new Error('Please enter a valid whole number for age');
            }

            switch (true) {
                case myAge < 0:
                    setResult('Call Doc. You are travelling back in time!');
                    break;
                case myAge === 0:
                    setResult('Tell your mom and dad to make you');
                    break;
                case myAge < 18:
                    setResult('You shall not pass');
                    break;
                case myAge < 100:
                    setResult('You shall pass');
                    break;
                case myAge < 200:
                    setResult('You have achieved wizard level');
                    break;
                case myAge < 300:
                    setResult('You are probably an elf');
                    break;
                case myAge < 500:
                    setResult('You have achieved god level');
                    break;
                case myAge >= 500:
                    setResult('Dude you are bored. Go out and touch grass');
                    break;
                default:
                    throw new Error('Unexpected age value');
            }
        } catch (error) {
            console.error('Error in handleClick:', error);
            setResult(error instanceof Error ? error.message : 'An unexpected error occurred');
        }
    }
    
    return (
        <>
            <h3>Enter Age:</h3>
            <input 
                className="input"
                type="number" 
                value={myAge} 
                onChange={handleAgeChange}
                onFocus={() => setMyAge('')}
            />
            <button onClick={handleClick} className="button2">Submit</button>
            <p>Age: {myAge}</p>
            <p>Result: {result}</p>
        </>
    )
}

export default DiveExperiment;