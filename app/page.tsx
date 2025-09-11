import React from "react";
import Button from "./components/button";
import PlayButton from "./components/playButton";
export default function Home() {

    var somthenig="";

    return <>
        <div className="flex items-center justify-center h-screen">
            <Button variant="">
                <span>
                    <p>Count</p>
                </span>
            </Button>
            <PlayButton />

        </div>
    </>;
}
