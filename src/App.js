import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About"
import Homepage from "./Homepage";
import Portfolio from "../src/Portfolio"
import Nav from "./Nav";

import Blog from "../src/Blog";
import Enqiry from "./Enqiry";
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
          
       </Route>
      </Routes>
     
    </BrowserRouter>
    
      <Enqiry/>
    <Footer/>
    </div>
  
    
     
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
