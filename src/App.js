import Navbar from "./Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import BasicModal from "./pages/Misc"
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import {Route, Routes} from "react-router-dom"; //allows to define all the routes and group them together

function App() {
  return (
    <>
     <Navbar/>
     <div className="container">
      {/* the routes compoinet will wrap all the individual routes */}
        <Routes> 
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/projects" element={<Projects/>}> </Route>
          <Route path="miscellaneous" element={<BasicModal/>}> </Route>
          <Route path="/resume" element={<Resume/>}> </Route>
          <Route path="/contact" element={<Contact/>}> </Route>

        </Routes>
     </div>
    </>

);
    
}

export default App;
