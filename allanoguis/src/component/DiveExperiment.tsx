import React, { Fragment, useState } from "react";
import "../styles/App.css";

const DiveExperiment: React.FC = () => {
    const [myAge, setMyAge] = useState<number | ''>(0);
    const [result, setResult] = useState<string>('');

    const handleClick = (): void => {
        if (typeof myAge === 'number') {
            if (myAge < 0) setResult('Call Doc. You are travelling back in time!');
            else if (myAge === 0) setResult('Tell your mom and dad to make you');
            else if (myAge < 18) setResult('You shall not pass');
            else if (myAge < 100) setResult('You shall pass');
            else if (myAge < 200) setResult('You have achieved wizard level');
            else if (myAge < 300) setResult('You are probably an elf');
            else if (myAge < 500) setResult('You have achieved god level');
            else setResult('Dude you are bored. Go out and touch grass');
        } else {
            setResult('Please enter a valid age');
        }
    }
    
    return (
        <>
            <h3>Enter Age:</h3>
            <input 
                className="input"
                type="number" 
                value={myAge} 
                onChange={(e) => setMyAge(e.target.value ? Number(e.target.value) : '')} 
                onFocus={() => setMyAge('')}
            />
            <button onClick={handleClick} className="button2">Submit</button>
            <p>Age: {myAge}</p>
            <p>Result: {result}</p>
        </>
    )
}

export default DiveExperiment;