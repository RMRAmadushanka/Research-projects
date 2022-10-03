
import './App.css';
import AddEditNote from './components/AddEditNote';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditNote from './components/EditNote';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editTour/:id" element={<EditNote />}
        
          />
          <Route path="/add" element={<AddEditNote/>} />
        </Routes>
      </BrowserRouter>
     

    </div>
  );
}

export default App;
