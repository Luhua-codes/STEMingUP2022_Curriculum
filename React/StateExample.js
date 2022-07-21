class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = { //add states just like class properties (except that keys do not have to be strings)
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }

    changeColor = () => { //recall arrow function notation
        this.setState({ //setState method allows state properties to be modified
            color: "blue" //other properties remain unchanged
        });
    }

    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p> It is a {this.state.color} {this.state.model} from {this.state.year}. </p>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
        );
    }
}