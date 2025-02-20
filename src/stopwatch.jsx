import { useState ,useEffect,useRef } from "react";
function Stopwatch(){
    const[isrunning,setIsrunning]=useState(false);
    const[elaptime,setElapTime]=useState(0);
    const intervalRef=useRef();
    const startTime=useRef(0);

    useEffect(()=>{
        if(isrunning){
            intervalRef.current=setInterval(()=>{
                setElapTime(Date.now()-startTime.current);
            },10);
        }
        return()=>{
            clearInterval(intervalRef.current);
         }
    },[isrunning]);
    function start(){
        setIsrunning(true);
        startTime.current=Date.now()-elaptime;
        console.log(startTime.current);
        intervalRef.current=setInterval(()=>{
            setElapTime(Date.now()-startTime.current);
        },10);

    }
    function Stop(){  
        setIsrunning(false);

    }
    function Reset(){
        setElapTime(0);
        setIsrunning(false);

    }
    function format(){
        let hours=Math.floor(elaptime/(1000*60*60));
        let minutes=Math.floor((elaptime%(1000*60*60))/(1000*60));
        let seconds=Math.floor((elaptime%(1000*60))/1000);
        let mili=Math.floor((elaptime%1000)/10);

        hours=hours.toString().padStart(2,"0");
        minutes=minutes.toString().padStart(2,"0");
        seconds=seconds.toString().padStart(2,"0");
        mili=mili.toString().padStart(2,"0");
        return `${minutes}:${seconds}:${mili}`;
       }


    return(
        <div className="stopwatch">
            <div className="mainclass">
                <h1>{format()}</h1>
                <div className="buttons">
                    <button onClick={start} className="start">Start</button>
                    <button onClick={Stop} className="stop">Stop</button>
                    <button onClick={Reset} className="reset">Reset</button>
                </div>
            </div>
        </div>
    )
}
export default Stopwatch;
