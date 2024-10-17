
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop.jsx";

// pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <ToastContainer/>
        <div className="bg-[whitesmoke] m-">
          <div className="fixed top-0 z-[99] w-full ">
            <Navbar />
          </div>
          <div className="">
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/about" element={<About/>} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />         
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
