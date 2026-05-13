import { BrowserRouter, Routes, Route } from "react-router-dom";

import Feed from "./pages/Feed";
import Upload from "./pages/Upload";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
