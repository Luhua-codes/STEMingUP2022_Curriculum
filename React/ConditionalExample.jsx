function UserGreeting(props) { //if logged in
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) { //if not logged in
    return <h1>Please sign up.</h1>;
}

function LogoutButton(props) { //if logged in
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

function LoginButton(props) { //if not logged in
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return <UserGreeting />;
    }return <GuestGreeting />;
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);

        this.state = {isLoggedIn: false}; //set as logged out
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true}); //set as logged in
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false}); //set as logged out
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn //access current login state

        let button; //declare button variable

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />; //if logged in, add a logout button
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />; //if logged out, add a login button
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} /> <!--Display greeting according to login state-->
                {button} <!--Display button according to login state-->
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoginControl />);
