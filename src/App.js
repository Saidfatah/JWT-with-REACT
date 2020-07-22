import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Home from './components/routes/Home'
import About from './components/routes/About'
import Post from './components/routes/Post'
import Posts from './components/routes/Posts'
import CreatePost from './components/routes/CreatePost'
import AuthenticationPage from './components/routes/AuthenticationPage'
import Navbar from './components/layout/Navbar'
function App() {
  return (
    <div className="App">
       <Router>
         <Navbar/>
          <Switch>
             <Route exact path="/"><Home /></Route>
             <Route path="/about"><About /></Route>
             <Route path="/post/:id"><Post /> </Route>
             <Route path="/posts"><Posts /> </Route>
             <Route path="/createpost"><CreatePost /> </Route>
             <Route path="/createpost"><CreatePost /> </Route>
             <Route path="/authpage"><AuthenticationPage /> </Route>
           </Switch>
       </Router>
    </div>
  )
}

export default App;
