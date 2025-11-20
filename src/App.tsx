import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { HouseProvider } from "./context/HouseContext";
import { DashboardPage } from "./pages/DashboardPage";
import { SchedulePage } from "./pages/SchedulePage";
import { SwapPage } from "./pages/SwapPage";
import { RoommatesPage } from "./pages/RoommatesPage";
import { RoommateDetailPage } from "./pages/RoommateDetailPage";
import { NotificationsDemoPage } from "./pages/NotificationsDemoPage";

function App() {
  return (
    <HouseProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/swap" element={<SwapPage />} />
          <Route path="/roommates" element={<RoommatesPage />} />
          <Route path="/roommates/:id" element={<RoommateDetailPage />} />
          <Route path="/notifications-demo" element={<NotificationsDemoPage />} />
        </Routes>
      </Router>
    </HouseProvider>
  );
}

export default App;
