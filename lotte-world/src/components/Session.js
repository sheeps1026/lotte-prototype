import React from "react";

import VolatileCounter from "../components/VolatileCounter";
import PersistentCounter from "../components/PersistentCounter";
import PersistentSwitch from "../components/PersistentSwitch";

const Session = () => {
    return (
        <div>
             <div className="App">
                <h2>상태가 유실되는 카운터</h2>
                <VolatileCounter />
                <hr />
                <h2>상태가 유지되는 카운터</h2>
                <PersistentCounter />
                <hr />
                <h2>상태가 유지되는 스위치</h2>
                <PersistentSwitch />
                </div>
        </div>
    );
};

export default Session;