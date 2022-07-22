import { useState } from "react"; //Import useState
import ReactDOM from "react-dom/client";

function FavoriteColor() {
    //Declare a variable with value colour to hold current state, and value setColour as function used to update the state
    // Holds values returned by useState
    //Provide initial state to useState → in this case, “red”
    const [colour, setColor] = useState("red");

    return (
        <>
            <h1>My favourite colour is {colour}!</h1> <!--Access values returned by useState using the var names-->
            <button
                type="button"
                onClick={() => setColor("blue")} //update using updater function return value
            >Blue</button>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
