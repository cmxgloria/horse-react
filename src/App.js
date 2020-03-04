import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const horses = [
  {
    name: "maythehorsebewithu",
    active: true,
    country: "AUS",
    yearOfBirth: 2000,
    hourlyRate: 30,
    numOfHoursWorked: 2000
  },
  {
    name: "my wife knows everthing",
    active: true,
    country: "USA",
    yearOfBirth: 2007,
    hourlyRate: 50,
    numOfHoursWorked: 2500
  },
  {
    name: "arrrrr",
    active: true,
    country: "USA",
    yearOfBirth: 2004,
    hourlyRate: 30,
    numOfHoursWorked: 2000
  },
  {
    name: "hoof hearted",
    active: false,
    country: "AUS",
    yearOfBirth: 1981,
    hourlyRate: 88,
    numOfHoursWorked: 900
  },
  {
    name: "pony",
    active: false,
    country: "AUS",
    yearOfBirth: 2003,
    hourlyRate: 12,
    numOfHoursWorked: 9000
  },
  {
    name: "sunny boy",
    active: true,
    country: "AUS",
    yearOfBirth: 2003,
    hourlyRate: 42,
    numOfHoursWorked: 6450
  }
];
function Home(props) {
  // const arr = [1, 2, 3, 4]; under put{arr.map(i=>)}
  return (
    <section>
      <h1>home sweet home</h1>
      <p>welcome to the home</p>
      <Link to="/horses">please go to horses page</Link>
    </section>
  );
}

function Horses({ items }) {
  // if no props, use items then no need props; {items} destructure items = props.items; key mainly use especially list, dynamic item
  return (
    <section>
      <h1>Melbourne Cup Special</h1>
      {/* no need prop.items*/}
      {items.map(item => (
        <Link key={item.name} to={`/horses/${item.name}`}>
          <p>{item.name}</p>
        </Link>
      ))}
    </section>
  );
}

function HorsesDetails(props) {
  // useParams-custom hook from react-router-dom library, automatically destructe the name; hooks is kinds of closure, it remembers to the state
  const { name } = useParams();
  const horse = props.items.find(i => i.name === name);
  return (
    <section>
      <h1>details</h1>
      {/* <h2>{name}</h2>  this worked before, we use userParams get the name, either works; like {id}*/}
      <h2>{horse.name}</h2>
      <h2>{horse.yearOfBirth}</h2>
      <h2>{horse.country}</h2>
    </section>
  );
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/horses">Horses</Link>
        </nav>
        {/* withdraw everything on the page */}
        <Switch>
          <Route path="/horses/:name">
            <HorsesDetails items={horses} />
          </Route>
          <Route path="/horses">
            <Horses items={horses} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
