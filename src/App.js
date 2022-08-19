import {Switch, Route} from 'react-router-dom'
import Calhousing from './components/Calhousing';
import Homepage from './components/Homepage';
import Iris from './components/Iris';
import Wine from './components/Wine';
function App() {
  return (
    <div className="App">
     <Switch>
      <Route exact={true} path="/"><Homepage/></Route>
      <Route exact={true} path="/wine"><Wine/></Route>
      <Route exact={true} path="/iris"><Iris/></Route>
      <Route exact={true} path="/calhousing"><Calhousing/></Route>
      <Route>
          This is a 404 Page. The Page you are looking is not Available
        </Route>
     </Switch>
    </div>
  );
}

export default App;
