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
    const inputElement = useRef(); //no initial current value since current will be used for the input field
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Renders />);
root.render(<Focus/>)