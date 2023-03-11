import { useState } from "react";
import { BrowserRouter, Link, Routes, Route, Navigate } from "react-router-dom";
import Chat from "@/components/chat";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to="/chat">Join Chat</Link>
        </header>

        <main>
          <Routes>
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
