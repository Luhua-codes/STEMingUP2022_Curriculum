import {useState, createContext, useContext} from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext('user name'); //create a context to be used by Component5

function Component1() { //"top" component
    const [user, setUser] = useState("Jesse Hall"); //create a user state with value "Jesse Hall"

    return (
        <UserContext.Provider value={user}> <!--provider is Component5 -> pass Component1.user as props value to Component5 user context-->
            <h1>{`Hello ${user}!`}</h1> <!--user context has been updated, will print with "Jesse Hall" as value-->
            <Component2 user={user}/> <!--user context has been updated, will print with "Jesse Hall" as value-->
        </UserContext.Provider>
    );
}

function Component2() { //nested
    return (
        <div>
            <h1>Component 2</h1>
            <Component3/>
        </div>
    );
}

function Component3() { //nested
    return (
        <div>
            <h1>Component 3</h1>
            <Component4/>
        </div>
    );
}

function Component4() { //nested
    return (
        <div>
            <h1>Component 4</h1>
            <Component5/>
        </div>
    );
}

function Component5() { //"innermost" component
    const user = useContext(UserContext); //assign the context object userContent to user

    return (
        <div>
            <h1>Component 5</h1>
            <h2>{`Hello ${user} again!`}</h2> <!--using context which has user value-->
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1/>);