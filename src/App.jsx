import "./App.scss";
import SmaillGame from "./SmaillGame";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Home from "./Home";
import Big from "./Big/Big";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<SmaillGame />} path="/simple" />
          <Route element={<Big />} path="/hard" />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
