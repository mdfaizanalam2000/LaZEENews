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
import Footer from './components/Footer';
import Searched from './components/Searched';

const App = () => {
  const [progress, setProgress] = useState(0);
  const [search, setSearch] = useState("");

  return (
    <>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Navbar search={search} setSearch={setSearch} />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" category="general" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" category="entertainment" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" category="business" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" category="technology" />} />
          <Route exact path="/politics" element={<News setProgress={setProgress} key="politics" category="politics" />} />
          <Route exact path="/international" element={<News setProgress={setProgress} key="international" category="international" />} />
          <Route exact path="/search/:search" element={<Searched setProgress={setProgress} key={search} category={search} />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App;