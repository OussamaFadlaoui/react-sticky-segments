import React from "react";
import ReactDOM from "react-dom";
import {StickySegment} from "./lib";

const DemoApp = () => {
    return (
        <div>
            <h1>
                My demo
            </h1>

            <StickySegment/>
        </div>
    )
};

ReactDOM.render(<DemoApp/>, document.getElementById("root"));
