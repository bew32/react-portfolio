import React, { Component } from "react";
import Positioncard from '../components/Positioncard'

class Position extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Position OF Interest</h1>
                <Positioncard title="- Software Tester"></Positioncard>
                <Positioncard title="- Automate Tester"></Positioncard>
                <Positioncard title="- System analyst"></Positioncard>
                <Positioncard title="- System Engineer"></Positioncard>
                <Positioncard title="- System Admin"></Positioncard>
                <Positioncard title="- Software QA"></Positioncard>
                <Positioncard title="- Data analyst"></Positioncard>
                <Positioncard title="- Backend Developer"></Positioncard>
            </div>
        )
    }
}

export default Position;
