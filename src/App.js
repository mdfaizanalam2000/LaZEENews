import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" category="general" />} />
          {/* <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={9} country="in" category="general" />} /> */}
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" category="entertainment" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" category="business" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" category="technology" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;