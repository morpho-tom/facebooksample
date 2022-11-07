import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Forgot from "./Forgot";




function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<Forgot />} />
          </Routes>
        </Router>
  );
}

export default App;
