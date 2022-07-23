import {useState} from "react";
import ReactDOM from "react-dom/client";

//Q1 original code
/*class Q5 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numClicks: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            numClicks: prevState.numClicks + 1 //increase clicks counter
        }));
    }

    render(){
        return(
            <div>
                <button id='changeOnClick' onClick={this.handleClick}>Clicked {this.state.numClicks} times</button>
            </div>
        );
    }
}*/
function Clicker() {
    const [numClicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(numClicks + 1);
    }

    return (
        <div>
            <button id='changeOnClick' onClick={handleClick}>Clicked {numClicks} times</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker/>);