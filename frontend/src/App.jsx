import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import PassagesPage from "./pages/PassagesPage";
import VocabPage from "./pages/VocabPage";
import StatsPage from "./pages/StatsPage";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-50">
          <Routes>
            <Route path="/passages" element={<PassagesPage />} />
            <Route path="/vocab" element={<VocabPage />} />
            <Route path="/stats" element={<StatsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
