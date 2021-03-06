import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LibraryDashboard from './pages/Home/LibraryDashboard';
import LibraryPage from './pages/Library/Library';
import './App.css';


function App() {
  return (
    <Fragment>
      <div>HEADER / NAV PLACE HOLDER</div>
      <Router>
        <Switch>
          <Route exact path="/" component={LibraryDashboard}></Route>
          <Route path="/food" component={LibraryPage}></Route>
          <Route path="/marketing" component={LibraryPage}></Route>
          <Route path="/media" component={LibraryPage}></Route>
          <Route path="/software" component={LibraryPage}></Route>
          <Route path="/operations" component={LibraryPage}></Route>
          <Route path="/tools" component={LibraryPage}></Route>
          <Route path="/opportunities" component={LibraryPage}></Route>
          <Route path="/influencers" component={LibraryPage}></Route>
          <Route path="/random" component={LibraryPage}></Route>
          {/* <Route component={PageNotFound}></Route> */}
        </Switch>
      </Router>  
    </Fragment>
  );
}

export default App;