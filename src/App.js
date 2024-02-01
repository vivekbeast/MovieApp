import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowDetails from './ShowDetails';
import LandingPage from './landingPage';

function App() {
  return (
    <div className="App-header">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shows/:id" element={<ShowDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
