import "./App.scss";
import SmaillGame from "./SmaillGame";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Big from "./Big/Big";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<SmaillGame />} path="/simple" />
          <Route element={<Big />} path="/hard" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
