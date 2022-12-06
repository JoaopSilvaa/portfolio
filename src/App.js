import './App.css';
import { Route, Switch } from 'react-router-dom';
import Initial from './pages/Initial';
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
