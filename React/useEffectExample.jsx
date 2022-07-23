import {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";

function Timer() {
    const [count, setCount] = useState(0); //count holds the returned state, setCount holds the function to modify the state; count initial value = 0

    useEffect(() => {
        setTimeout(() => { //1st argument: function (called when Timer rendered)
            setCount((count) => count + 1); //function calls setCount -> increases value of count by 1
        }, 1000);
    }, []); //2nd argument: dependencies -> useEffect will only run when Timer first rendered

    return <h1>Rendered {count} times!</h1>;
}

function Counter() {
    const [count, setCount] = useState(0); //count holds the returned state, setCount holds the function to modify the state; count initial value = 0
    const [calculation, setCalculation] = useState(0); //calculation holds returned state, setCalculation to modify state; calculation initial value = 0

    useEffect(() => {
        setCalculation(() => count * 2); //function argument (called when Counter rendered)
    }, [count]); //dependencies array (useEffect only called after initial render if these values updated)

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer/>);
root.render(<Counter />);