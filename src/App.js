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
import Pods from "./routes/Pods.js";
import PodsDetail from "./routes/PodsDetail.js";
import Namespaces from "./routes/Namespaces.js";
import NamespacesDetail from "./routes/NamespacesDetail.js";
import Services from "./routes/Services.js";
import ServicesDetail from "./routes/ServicesDetail.js";
import PersistentVolume from "./routes/PersistentVolume.js";


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
        <Route path="/resources/pods" element={<Pods />} />
        <Route path="/resources/pods/detail/:name" element={<PodsDetail />} />
        <Route path="/resources/namespaces" element={<Namespaces />} />
        <Route path="/resources/namespaces/detail/:name" element={<NamespacesDetail />} />
        <Route path="/resources/services" element={<Services />} />
        <Route path="/resources/services/detail/:namespace/:name" element={<ServicesDetail />} />
        <Route path="/resources/persistentvolume" element={<PersistentVolume />} />
      </Routes>
    </Router >
  );
}

export default App;
