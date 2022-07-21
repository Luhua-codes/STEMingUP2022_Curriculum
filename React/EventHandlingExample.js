class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true //by default button is on
        };

        this.handleClick = this.handleClick.bind(this); //binding to handle method callback
        //JS methods are not bound by default, if handleClick is called by onClick without binding, will be undefined
    }

    handleClick() {
        this.setState(prevState => ({ //prevState holds the value of state before setState was called
            isToggleOn: !prevState.isToggleOn //change isToggleOn to the opposite of its value in the previous state
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}> //call handleClick() when button clicked
                {this.state.isToggleOn ? 'ON' : 'OFF'} //button display changed according to current state
            </button>
        );
    }
}