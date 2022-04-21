import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import PostHome from "./PostHome";
import Archive from "./Archive";
import NavBar from "./NavBar";

function App() {
  const [data, setData] = useState([])
console.log(data)
  useEffect(() => {
    fetch('http://localhost:3000/feelings')
    .then((r) => r.json())
    .then(x => setData(x))
  }, [])
  return (
    <div>
      <Switch>
        <Route exact path="/post">
          <PostHome data={data} setData={setData}/>
        </Route>
        <Route exact path="/archive">
          <Archive data={data} setData={setData}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
