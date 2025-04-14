import { BrowserRouter as Router } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import SideNav from "./components/SideNav";

function App() {
  return (
    <NextUIProvider>
      <Router>
        <div className="flex min-h-screen bg-gray-50">
          <SideNav />
          <main className="flex-1 ml-64 p-8">
            <h1 className="text-[2rem] font-semibold text-gray-900">
              Welcome to Studio
            </h1>
          </main>
        </div>
      </Router>
    </NextUIProvider>
  );
}

export default App;
