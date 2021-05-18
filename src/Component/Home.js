import React from 'react'
import ReactFullpage from "@fullpage/react-fullpage";

const Home = ( state, fullpageApi) =>{
    return (
        <div>
             <p>home (welcome to fullpage.js)</p>
                <button onClick={() => window.fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button>
        </div>
    )
}

export default Home
