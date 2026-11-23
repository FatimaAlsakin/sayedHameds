import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import SayedHamedDetails from "./pages/SayedHamedDetails";
import UpdateSayedHamed from "./pages/UpdateSayedHamed";
import AllSayedHameds from "./pages/AllSayedHameds";
import CreateSayedHamed from "./pages/CreateSayedHamed";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sayed-hameds" element={<AllSayedHameds />} />
        <Route path="/sayed-hameds/:sayedHamedId" element={<SayedHamedDetails />} />
        <Route path="/sayed-hameds/create" element={<CreateSayedHamed />} />
        <Route path="/sayed-hameds/:sayedHamedId/edit" element={<UpdateSayedHamed />} />

      </Routes>
    </div>
  );
}

export default App;
