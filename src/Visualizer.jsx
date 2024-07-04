import { useState } from 'react'
import { Optimal } from './Optimal.js';
import GenerateForm from './GenerateForm.jsx'
import BuildForm from './BuildForm.jsx'
import './Visualizer.css'

export default function Visualizer() {

    const [river, setRiver] = useState(()=>initialiseRiver(15,10));
    const [colors, setColors] = useState(()=>initialiseColors(15));
    const [disable, setDisable] = useState(false);

    function initialiseRiver(len, depth) {
        const newRiver = new Array(len);
        for(let i = 1; i<len-1; i++) {
            newRiver[i] = Math.floor(Math.random()*depth)+1;
        }
        newRiver[0] = 0;
        newRiver[len-1] = 0;
        return newRiver;
    }
    function initialiseColors(len) {
        const newColors = new Array(len).fill("lightseagreen");
        return newColors;
    }
    const generateNew = (len, depth) => {
        setColors(initialiseColors(parseInt(len)));
        setRiver(initialiseRiver(len, depth));
    }
    function buildBridge(hd, speed) {
        setDisable(true);
        const animations = Optimal(river, hd);
        const n = animations.length;
        for(let i = 0; i<n; i++) {
            setTimeout(() => {
                const newColors = new Array(n).fill("lightseagreen");
                if(typeof animations[i][0] !== 'number') {
                    for(let j of animations[i][0]) {
                        newColors[j] = "green";
                    }
                    newColors[animations[i][1]] = "red";
                } else {
                    newColors[animations[i][0]] = "red";
                    for(let j of animations[i][2]) {
                        newColors[j] = "yellow";
                    }
                    newColors[animations[i][1]] = "orange";
                }
                setColors(newColors);
            }, 250*speed*i);
        }
        setTimeout(() => {
            setDisable(false);
        }, 250*speed*n);
    }

    return (
        <>
            <GenerateForm generateNew={generateNew} disable={disable}></GenerateForm>
            <div className='sky'>
                <div className='bridge'></div>
            </div>
            <div className='ground'>
                {river.map((value, ind) => (
                    <div
                        key={ind} 
                        className='water' 
                        style={{
                            height: `${2*value}vh`, 
                            backgroundColor: colors[ind]
                        }}>
                    </div>
                ))}
            </div>
            <BuildForm buildBridge={buildBridge} len={river.length} disable={disable}></BuildForm>
        </>
    );
}