import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About"
import Homepage from "./Homepage";
import Portfolio from "../src/Portfolio"
import Service from "../src/service"
import Nav from "./Nav";
import Contact from "./Contact";

import Blog from "../src/Blog";

import Footer from "./footer";
export default function App() {
  return (
   
    <div className="body">
    <BrowserRouter>
      <Routes>
      <Route  path="/" element={<Nav />} >

          <Route path="/" index  element={<Homepage />} />
          <Route  path="About" element={<About />} />
          <Route  path="Portfolio" element={<Portfolio />} />
          <Route  path="Blog" element={<Blog />} />
          <Route  path="Service" element={<Service />} />
          <Route  path="Contact" element={<Contact />} />
       </Route>
      </Routes>
     
    </BrowserRouter>
    
      
    <Footer/>
    </div>
  
    
     
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
