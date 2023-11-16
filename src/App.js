import './App.css';
import 'react-loading-skeleton/dist/skeleton.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NoMatch from './component/pages/NoMatch.jsx';

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
