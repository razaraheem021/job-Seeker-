import { useEffect, useState } from "react";

import { ThemeProvider } from "@/components/theme-provider";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import '@fortawesome/fontawesome-free/css/all.css';
function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </Router>
      
    </ThemeProvider>
  );
}

export default App;
