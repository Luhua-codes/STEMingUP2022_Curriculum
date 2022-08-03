import {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";

function Timer() {
    const [count, setCount] = useState(0); //count holds the returned state, setCount holds the function to modify the state; count initial value = 0

    useEffect(() => {
        let timer = setTimeout(() => { //1st argument: function (called when Timer rendered)
            setCount((count) => count + 1); //function calls setCount -> increases value of count by 1
        }, 1000); //setTimeout is a JS function which waits for the set amount of milliseconds (1000 = 1 second), then executes the interior code

        return () => clearTimeout(timer) //clearTimeout is a JS function which cancels a timeout established by setTimeout (cancels timeout from timer after effect is finished)
    }, []); //2nd argument: dependencies -> useEffect will only run when Timer first rendered

    return <h1>Rendered {count} times!</h1>;
}

function Counter() {
    const [count, setCount] = useState(0); //count holds the returned state, setCount holds the function to modify the state; count initial value = 0
    const [calculation, setCalculation] = useState(0); //calculation holds returned state, setCalculation to modify state; calculation initial value = 0

    useEffect(() => { //did not name function argument since there is no return function that needs to act on it (compared to Timer arg)
        setCalculation(() => count * 2); //function argument (called when Counter rendered)
    }, [count]); //dependencies array (useEffect only called after initial render if these values updated)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer/>);
root.render(<Counter />);