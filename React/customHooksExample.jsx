import {useState, useEffect} from 'react'
import {createRoot} from "react-dom/client";

//accessing saved data
//key = reference of saved data
function getSavedValue(key, value) {
    const savedValue = JSON.parse(localStorage.getItem(key)); //JSON = "JavaScript Object Notation" -> formats returned item (the data saved in the supplied key) into JS object
    if (savedValue) //if an item matching the key is found
        return savedValue; //return that item
    else if (value instanceof Function) //no saved value found but initial value is a function
        return value(); //return value as a function (since useState can take function inputs as initialValue)
    else //no savedValue found and initialValue is not a function
        return value;
}

//hook to keep data in local storage (persist data) across browser sessions
//key = referenced for the stored data
export function useLocalStorage(key, initialValue) { //new custom hook
    const [value, setValue] = useState(() => { //custom hook can call existing hook (useState)
        return getSavedValue(key, initialValue); //on first component render, load JSON version of initialValue
    }); //subsequent renders will

    useEffect(() => { //runs on initial render and when value changes
        localStorage.setItem(key, JSON.stringify(value)); //add item to localStorage as string data (converted back to JSON when getting saved value)
    }, [value]); //value is dependency

    return [value, setValue];
}

//logs to console whenever value updates occur
export function useUpdateLogger(value) {
    useEffect(() => {
        console.log(value)
    }, [value]); //value dependency -> runs whenever value changes
}

export default function App() {
    const [name, setName] = useLocalStorage('name', ''); //supply key 'name' with initial value of empty string
    //const [name1, setName1] = useLocalStorage('name1', () => ''); //supply function that returns empty string as initial value
    useUpdateLogger(name);

    return (
        <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
    );
}

const root = createRoot(document.getElementById("root"));
root.render(<App/>);