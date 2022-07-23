import {useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom/client";

//tracking application renders
function Renders() {
    const [inputValue, setInputValue] = useState(""); //state for input text box
    const count = useRef(0); //var to keep track of renders, type of useRef with initial current value 0

    useEffect(() => { //runs every time App is rendered
        count.current = count.current + 1; //increase current value of the useRef count by 1 every time a render occurs
    });

    return (
        <div>
            <input type="text" //text field input
                   value={inputValue} //inputValue state (empty to start) assigned to value of text field
                   onChange={(e) => setInputValue(e.target.value)} //when value changed (ex. user inputs text), assign that value to inputValue state
            />
            <h1>Render Count: {count.current}</h1> <!--update current count-->
        </div>
    );
}

//focus the input field after button pressed (instead of button focus)
function Focus() {
    const inputElement = useRef(); //empty initial current value; current will be used for the input field
    const focusInput = () => {
        inputElement.current.focus(); //put focus onto current value from inputElement (returned by useRef)
    };

    return (
        <div>
            <input type="text" ref={inputElement} /> <!--ref attribute allows direct manipulation of the input field element; assign inputElement (of type current from useRef) as value-->
            <button onClick={focusInput}>Focus Input</button> <!--when button clicked, call focusInput method-->
        </div>
    );
}

//track previous state values
function PrevState() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef(""); //initial current same as inputValue's initial state

    useEffect(() => { //runs when initially rendered and when inputValue is updated
        previousInputValue.current = inputValue; //assign inputValue to previousInputValue's current (stores value before newest update since re-render is not caused by useRef)
    }, [inputValue]); //inputValue dependency

    return (
        <div>
            <input
                type="text" //text input field
                value={inputValue} //set initial value as inputValue (empty string as initial state)
                onChange={(e) => setInputValue(e.target.value)} //when text field changed (ex. user inputs text), update inputValue with the content of the text field
            />
            <h2>Current Value: {inputValue}</h2> <!--display current inputValue-->
            <h2>Previous Value: {previousInputValue.current}</h2> <!--display previous inputValue (stored by previousInputValue.current)-->
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Renders />);
root.render(<Focus/>);
root.render(<PrevState/>);