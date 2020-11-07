import React from "react";

function Greeting(props) {
    var x = "SUP";
    return <div>{`${x} ${props.name}`}</div>;
}
export default Greeting;
