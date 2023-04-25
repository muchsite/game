import "./App.scss";
import SmaillGame from "./SmaillGame";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Home from "./Home";
import Big from "./Big/Big";
import Third from "./Third";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<SmaillGame />} path="/simple" />
          <Route element={<Big />} path="/hard" />
          <Route element={<Third />} path="/third" />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
