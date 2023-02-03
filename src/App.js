import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import One from "./Pages/One";
import Two from "./Pages/Two";

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ margin: "100px auto", maxWidth: "1200px" }}>
        <Routes>
          <Route path="oneline" element={<One />} />
          <Route path="twoline" element={<Two />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
