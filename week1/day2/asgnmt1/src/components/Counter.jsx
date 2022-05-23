
import {useState} from "react"
import { Btn } from "./Btn";

export const Counter = ()=>{
    
    const [time,setTime] = useState({h:0, m:0, s:0, ms:0});
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);

    let updatedms = time.ms, updateds = time.s, updatedm = time.m, updatedh = time.h;

    const stopwatch = () => {
      if(updatedm === 60){
        updatedh++;
        updatedm = 0;
      }
      if(updateds === 60){
        updatedm++;
        updateds = 0;
      }
      if(updatedms === 100){
        updateds++;
        updatedms = 0;
      }
      updatedms++;
      return setTime({ms:updatedms, s:updateds, m:updatedm, h:updatedh});
    };

    const start = ()=>{
        stopwatch();
        setStatus(1);
        setInterv(setInterval(stopwatch, 10));
    }

    const stop = () => {
        clearInterval(interv);
        setStatus(2);
    };

    const resume = () => start();

    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ms:0, s:0, m:0, h:0})
    };


    return (
        <div>
            <h1>Stopwatch</h1>
            <h3>{time.h} : {time.m} : {time.s} : {time.ms}</h3>
            <Btn status={status} resume={resume} reset={reset} stop={stop} start={start}></Btn>
        </div>
    )
}