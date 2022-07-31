
import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const PersistentSwitch = () => {
    const [on, setOn] = useLocalStorage("on", false);

    return <button onClick={() => setOn(!on)}>{on ? "ON" : "OFF"}</button>;
};

export default PersistentSwitch;
