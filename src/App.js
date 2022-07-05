import './App.css';
import { Route, Switch } from 'react-router-dom';
import Initial from './pages/Initial';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProjectDetails from './pages/ProjectsDetails';

function App() {
  return (
    <Switch>
      <Route 
        path="/"
        exact
        component={ Initial }
      />
      <Route 
        path="/projects"
        component={ Projects }
      />
      <Route
        path="/contact"
        component={ Contact }
      />
      <Route 
        path="/home"
        component={ Home }
      />
      <Route
        path="/projectDetails/:id"
        component={ ProjectDetails }
      />
      <Route 
        path="*"
        component={ NotFound }
      />
    </Switch>
  );
}

export default App;
