import { useState } from "react";

export default function BuildForm({ buildBridge,len,disable }) {
    const [data, setData] = useState({dis: 5, speed : 2});
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        buildBridge(data.dis, 6-data.speed);
    }
    const handleChange = (evt) => {
        setData(currData => {return {
            ...currData,
            [evt.target.name] : evt.target.value
        }});
    }

    return (
        <form onSubmit={handleSubmit} style={{marginTop:'10px'}}>
            <label htmlFor="length">Maximum distance between pillars</label>
            <input type="number" id="length" value={data.dis} name="dis" min={2} max={len-2} onChange={handleChange}/>

            <label htmlFor="speed" style={{marginLeft:"10px"}}>Speed</label>
            <input type="range" id="speed" value={data.speed} name="speed" min="1" max="5" onChange={handleChange}/>
            
            <button style={{marginTop:"10px"}} disabled={disable}>Build Bridge</button>
        </form>
    )
}