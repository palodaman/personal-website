import {Link, useMatch, useResolvedPath} from "react-router-dom";
// import {Contact} from ""
import Contact from "./pages/Contact";
import * as React from 'react';
import { Tooltip } from '@mui/material';
// import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
export default function Navbar(){
   

    return(
        <nav className="nav">
            <Link to="/" className="site-name"> Aman Palod</Link>
            
            <ul>
                
         
          <Customlink to="/projects" className="hover"> Projects</Customlink>
          <Customlink to="/miscellaneous" className="hover"> Misc.</Customlink>
          <Customlink to="/resume" className="hover"> Resume</Customlink>
          {/* <Customlink to="/contact" className="contact"> Contact</Customlink>
           */}
            <Contact/>
            <li className="github svg" >    
                <a target="_blank" href="https://github.com/palodaman" >   <i className="fa-brands fa-github fa-xl"></i> </a> 
            </li>

            <Tooltip TransitionComponent={Zoom} title="add me @zulfi#1461"> 
            <li className="twitter svg" >    
                <a target="_blank" href="https://discord.com" >   <i className="fa-brands fa-discord fa-xl"></i> </a> 
            </li>
            </Tooltip>
            <li className="linkedin svg" >                    
                <a target="_blank" href="https://www.linkedin.com/in/aman-palod-3a09911b4/" >   <i className="fa-brands fa-linkedin fa-xl"></i> </a> 
            </li>

            </ul>
        </nav>
    )
}

function Customlink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to); //this will resolve the relative or absolute path and combines it with the current path to give the full path to access
    const isActive = useMatch({path: resolvedPath.pathname, end: true}) //entire path must match so end true 


    const path = window.location.pathname;
    return(
        <li className={isActive? "active" : ""}>
            <Link to={to} {...props}> {children}</Link>
        </li>
    )
}