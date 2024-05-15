import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rwd1 from "./pages/Rwd1";
import Rwd2 from "./pages/Rwd2";
import Rwd3 from "./pages/Rwd3";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rwd1" element={<Rwd1 />} />
      <Route path="/rwd2" element={<Rwd2 />} />
      <Route path="/rwd3" element={<Rwd3 />} />
    </Routes>
  );
}

export default App;
