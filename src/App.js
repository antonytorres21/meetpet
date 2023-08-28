import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import Layout from "./components/Layout";
import Dogs from "./components/Dogs";
import Cats from "./components/Cats";
import About from "./components/About";
import BreedDetails from "./components/BreedDetails";
import Error404Page from "./components/Error404Page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeComponent />} />
          <Route path="dogs">
            <Route index element={<Dogs />} />
            <Route path=":name" element={<BreedDetails />} />
          </Route>
          <Route path="cats">
            <Route index element={<Cats />} />
            <Route path=":name" element={<BreedDetails />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/404" element={<Error404Page />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
