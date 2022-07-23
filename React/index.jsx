import {StrictMode} from "react";
import {createRoot} from "react-dom/client";

function q1() {
    const fullName = {
        'firstName': "Alice",
        'lastName': "Smith"
    }
    return (
        <div>
            <p>Question 1</p>
            <p>Hello {fullName.firstName} {fullName.lastName}! Nice to meet you!</p>
        </div>
    );
}

function q2() {
    return (
        <div>
            <p>Question 2</p>
            <p>I've included multiple elements inside of this div.</p>
            <label>This button is another element: </label>
            <button id="RandomButton">Random inactive button</button>
        </div>
    )
}

function Q3(props) {
    return <p>Hello, {props.name}. This is question 3.</p>
}

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        {q1()}
        {q2()}
        <Q3 name="Barbara"></Q3>
    </StrictMode>
);