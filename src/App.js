import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./routes/Main.js";
import Overview from "./routes/Overview.js";
import OverviewSummary from "./routes/OverviewSummary.js";
import Alerts from "./routes/Alerts.js";
import Nodes from "./routes/Nodes.js";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/overview/summary" element={<OverviewSummary />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/nodes" element={<Nodes />} />
      </Routes>
    </Router >
  );
}

export default App;
