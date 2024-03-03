import * as React from 'react';
import { useState, useEffect } from 'react';


function Temp() {
    const [tempsData, setTempsData] = useState({ temp: 0.0, humidity: 0.0, pool: 0.0});

    // Put the onUpdate code in the use effect block so I don't
    // have an exponential number of event listeners.
    useEffect(() => {
        // Setup in the preload.js
        window.electronAPI.onUpdate((value) => {
            let thejson = JSON.parse(value);
            thejson.time = new Date().toISOString();
            setTempsData(thejson);
        });
    }, [])
    
    return (
        <>
            <div className='row mt-4'>
                <Attribute title={"Pool"} value={(+tempsData.pool).toFixed(1)} />
                <Attribute title={"Air"} value={(+tempsData.temp).toFixed(1)} />
                <Attribute title={"Humidity"} value={tempsData.humidity} />
            </div>
            <Clock time={tempsData.time} />
        </>
    );
}

export { Temp };

function Attribute({title, value}) {
    return (
        <div className="col-sm-4">
            <div className="card">
                <div style={{ fontSize: '3vw' }} 
                    className="card-header text-center">
                    {title}
                </div>
                <div className="card-body">
                    <p className="text-center" 
                    style={{ fontSize: '10vw' }}>{value}</p>
                </div>
            </div>
        </div>
    )
}

function Clock({time}) {
    return (
        <>
        <div data-bs-theme="dark">Last Update: {time}</div>
        </>
    )
}