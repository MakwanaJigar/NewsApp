import "./App.css";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  // const pageSize=5;

  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <Navbar />

        {/* top loading bar ...use to show process on top of hte bar */}
        <LoadingBar height={4} color="#f11946" progress={progress} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                country="in"
                pageSize={3}
                category="general"
                key="home"
                apiKey="990252bf5f3f47e595e37aa77bf9cce2"
              />
            }
          />

          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                country="in"
                pageSize={3}
                category="business"
                key="business"
                apiKey="990252bf5f3f47e595e37aa77bf9cce2"
              />
            }
          />

          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                country="in"
                pageSize={3}
                category="entertainment"
                key="entertainment"
                apiKey="990252bf5f3f47e595e37aa77bf9cce2"
              />
            }
          />

          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                country="in"
                pageSize={3}
                category="general"
                key="general"
                apiKey="990252bf5f3f47e595e37aa77bf9cce2"
              />
            }
          />

          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                country="in"
                pageSize={3}
                category="health"
                key="health"
                apiKey="990252bf5f3f47e595e37aa77bf9cce2"
              />
            }
          />

          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                country="in"
                pageSize={3}
                category="science"
                key="science"
                apiKey="990252bf5f3f47e595e37aa77bf9cce2"
              />
            }
          />

          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                country="in"
                pageSize={3}
                category="sports"
                key="sports"
                apiKey="990252bf5f3f47e595e37aa77bf9cce2"
              />
            }
          />

          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                country="in"
                pageSize={3}
                category="technology"
                key="technology"
                apiKey="990252bf5f3f47e595e37aa77bf9cce2"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};
export default App;
