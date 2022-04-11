//import { Button } from 'react-bootstrap';
import{BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Routing from './components/Routing';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
          <Routing />
     </Router>
    </div>
  );
}

export default App;
