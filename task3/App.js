import React from "react";
import "./App.css";
import PostsList from "./components/PostsList";

function App() {
  return (
    <div className="App">
      <h1 className="app-title">Posts List:</h1>
      <PostsList />
    </div>
  );
}

export default App;
