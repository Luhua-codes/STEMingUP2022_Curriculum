//component imports
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import {useState, useEffect} from "react";

//import stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Counter(){ //define a custom React component
    const [count, setCount] = useState(localStorage.getItem("count") ? Number(localStorage.getItem("count")) : 0);

    //button click count endures between browser sessions
    useEffect(() => { //hooks can be used as normal
        localStorage.setItem("count", String(count)); //js functions like localStorage can still be used with React Bootstrap
    }, [count]);

    return(
        <div>
            <p>Button clicked: {count} time(s)</p>
            <Button onClick={() => setCount((c) => c + 1)}>Click Me!</Button>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Card className='mb-3 text-black'> {/*Add styling with className*/}
                    <Card.Body>
                        <Card.Title>My Card</Card.Title>
                        <Card.Text>This is an example use of React Bootstrap. This is a Card component.</Card.Text>
                    </Card.Body>
                </Card>
                <Button variant='outline-success'>Outline Success {/*Add colour specification with variant attribute*/}
                    Button</Button>

                <Table className='text-white'>
                    <thead> {/*header row of table*/}
                    <tr>
                        <th>Heading 1</th>
                        <th>Heading 2</th>
                        <th>Heading 3</th>
                    </tr>
                    </thead>
                    <tr>  {/*Default styling used if not otherwise specified*/}
                        <td>1.1</td>
                        <td>1.2</td>
                        <td>1.3</td>
                    </tr>
                    <tr>
                        <td>2.1</td>
                        <td>2.2</td>
                        <td>2.3</td>
                    </tr>
                </Table>
                <Counter/> {/*Custom components can be used as usual*/}
            </header>
        </div>
    );
}

export default App;
