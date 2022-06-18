
import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Library from "./pages/Library";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="library" element={<Library />} />
        </Route>
      </Routes>
  );
}

export default App;
