import { useState } from "react";

export default function GenerateForm({ generateNew,disable }) {
    const [data, setData] = useState({len : 15, depth : 10});
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        generateNew(data.len , data.depth);
    }
    const handleChange = (evt) => {
        setData(currData => {return {
            ...currData,
            [evt.target.name] : evt.target.value
        }});
    }

    return (
        <form onSubmit={handleSubmit} style={{marginBottom:'10px'}}>
            <label htmlFor="length">Width of River</label>
            <input type="number" id="length" value={data.len} name="len" min={5} max={75} maxLength='1' onChange={handleChange}/>

            <label htmlFor="maxDepth" style={{marginLeft:"10px"}}>Maximum Depth</label>
            <input type="number" id="maxDepth" value={data.depth} name="depth" min={2} max={30} onChange={handleChange}/>

            <button style={{marginLeft:"10px"}} disabled={disable}>Generate</button>
        </form>
    )
}