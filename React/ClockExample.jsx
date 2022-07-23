class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}; //add date property in constructor
    }

    componentDidMount() { //called when mounting (after component rendered to DOM)
        this.timerID = setInterval( //create a timer that "ticks" every second (is a class field just like this.state and this.props)
            () => this.tick(), //call tick method
            1000 //wait one second
        );
    }

    componentWillUnmount() { //called when umounting
        clearInterval(this.timerID); //free up memory used by the timer
    }

    tick() { //method to help the clock "tick"
        this.setState({
            date: new Date() //update the current time
        });
    }

    render() { //what shows on the screen when a Clock tag is used
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2> //display current time
            </div>
        );
    }
}
