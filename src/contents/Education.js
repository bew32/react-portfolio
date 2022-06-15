 import React, { Component } from 'react'
 import Widecard from '../components/Widecard';

 class Education extends Component {
     render() {
         return(
             <div className="condiv">
                 <h1 className="subtopic">My Education</h1>
                 <Widecard title="Software Engineering" where="Nakhon Pathom Rajabhat University" from="2019" to="Present" />
                 {/* <Widecard title="Web Developer" where="Nakhon Pathom Rajabhat University" from="2019" to="2022" /> */}
             </div>
         );
     }
 }
 
 export default Education;