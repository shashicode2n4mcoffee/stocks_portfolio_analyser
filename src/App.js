import "./App.css";
import React, { lazy, Suspense } from "react";

const Home = lazy(() => import("./Pages/Home"));

function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </div>
  );
}

export default App;
