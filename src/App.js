import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import Layout from "./components/Layout";
import Dogs from "./components/Dogs";
import Cats from "./components/Cats";
import BreedDetails from "./components/BreedDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeComponent />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/dogs/:id" element={<BreedDetails />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/cats/:id" element={<BreedDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
