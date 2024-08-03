import { Route, Routes } from "react-router";
import Letter from "./components/Letter";
import Login from "./components/Login";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Letter />} />
      </Routes>
    </div>
  );
}

export default App;
