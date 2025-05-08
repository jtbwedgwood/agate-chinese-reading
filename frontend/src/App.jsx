import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import PassagesPage from "./pages/PassagesPage";
import VocabPage from "./pages/VocabPage";
import StatsPage from "./pages/StatsPage";

function App() {
  const [showPassageOverlay, setShowPassageOverlay] = useState(false);

  return (
    <Router>
      <div className="flex h-screen relative">
        {/* Sidebar */}
        <Sidebar setShowPassageOverlay={setShowPassageOverlay} />

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-50 overflow-y-auto relative">
          <Routes>
            <Route path="/passages" element={<PassagesPage 
              showOverlay={showPassageOverlay}
              setShowOverlay={setShowPassageOverlay}
            />} />
            <Route path="/vocab" element={<VocabPage />} />
            <Route path="/stats" element={<StatsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
