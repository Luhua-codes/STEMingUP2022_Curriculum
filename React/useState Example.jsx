import {useState} from "react"; //Import useState
import ReactDOM from "react-dom/client";

function FavoriteColor() {
    //Declare a variable with value colour to hold current state, and value setColour as function used to update the state
    // Holds values returned by useState
    //Provide initial state to useState → in this case, “red”
    const [colour, setColor] = useState("red");

    return (
        <div>
            <h1>My favourite colour is {colour}!</h1> <!--Access values returned by useState using the var names-->
            <button type="button"
                    onClick={() => setColor("blue")}> <!--update using updater function returned by hook-->
                Blue
            </button>
        </div>
    )
}

function Car() {
    //can have many state Hooks, just like many properties can be added to state in a class component
    /* const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");*/

    //OR just use one Hook that holds an object with all properties
    const [car, setCar] = useState({
        brand: "Honda",
        model: "Civic",
        year: 2022, //do not all have to be the same data type
        colour: "black" //can also have undefined or null values
    })

    const updateColour = () => {
        setCar(previousState => { //retain info from previous state
            return {...previousState, colour: "blue"}
        });
    }

    return (
        <div>
            <h1>My {car.brand}</h1> <!--use dot notation with the returned state object to access each property-->
            <p> It is a {car.color} {car.model} from {car.year}. </p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor/>);
root.render(<Car/>);