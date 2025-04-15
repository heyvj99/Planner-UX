import { BrowserRouter as Router } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";

function App() {
  return (
    <NextUIProvider>
      <Router>
        <div className="flex min-h-screen bg-gray-50">
          <SideNav />
          <main className="flex-1 ml-64">
            <MainContent />
          </main>
        </div>
      </Router>
    </NextUIProvider>
  );
}

export default App;
