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
import NodesDetail from "./routes/NodesDetail.js";
import Deployments from "./routes/Deployments.js";
import DeploymentsDetail from "./routes/DeploymentsDetail.js";
import Pods from "./routes/Pods.js";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/overview/summary" element={<OverviewSummary />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/nodes" element={<Nodes />} />
        <Route path="/nodes/detail/:name" element={<NodesDetail />} />
        <Route path="/controllers/deployments" element={<Deployments />} />
        <Route path="/controllers/deployments/detail/:name" element={<DeploymentsDetail />} />
        <Route path="/resources/pods" element={<Pods />} />
      </Routes>
    </Router >
  );
}

export default App;
