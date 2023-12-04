
import Labs from "./Labs";
import Project from "./Project";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import { HashRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
function App() {
  return (
    <HashRouter>
      <div>
        <div className="nav nav-pills">

          <Link
            to="/hello"
            className={`nav-link`}
          >
            Hello
          </Link>

          <Link
            to="/Labs"
            className={`nav-link`}
          >
            Labs
          </Link>

          <Link
            to="/Kanbas"
            className={`nav-link`}
          >
            Kanbas
          </Link>
          <Link
            to="/Project"
            className={`nav-link`}
          >
            Project
          </Link>
          
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/project/*" element={<Project />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;