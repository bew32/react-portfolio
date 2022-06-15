import React, { Component } from 'react'
import profilepic1 from '../img/profile1.jpg'

class About extends Component {
    render() {
        return(
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                {/* <img src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-9/118730292_4335787969826202_874822354429782795_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=G0lExGcor7QAX8omYaQ&_nc_ht=scontent.fbkk5-7.fna&oh=d979e3e0ac217d49d3b98b2bacd7c8d1&oe=5FB22568" alt="profile" className="profilepic" /> */}
                <img src={profilepic1} />
                <h3>Hi, I'm tawat</h3>
                <p>My name is Tawat studying at Nakhon Pathom Rajabhat University 
                <br/>Major Software Engineering</p>
            </div>
        );
    }
}

export default About;
