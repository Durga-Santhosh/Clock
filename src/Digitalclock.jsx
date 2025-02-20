import { useEffect, useState } from "react";
function Clock(){
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
            }, 1000);
            return () => clearInterval(intervalId);
    }, []);

    function TimeUpdate(){
        let hours=time.getHours();
        let minutes=time.getMinutes();
        let seconds=time.getSeconds();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;

        return(`${zero(hours)}:${zero(minutes)}:${zero(seconds)} ${ampm}`)

        function zero(number){
            return (number < 10 ? '0' : '') + number;
        }
    }
    const day=time.getDay();
    const date=time.getDate();
    const month=time.getMonth()+1;
    const Year=time.getFullYear(); 

    let dayna=document.querySelectorAll(`.day${day}`);
    dayna.forEach((element)=>{
        element.style.fontWeight="bold";
        element.style.fontSize="20px";
        element.style.backgroundColor="#4a4a4a";
    });
    let monthname=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];




  


    return(
        <>
        <div className="clock">
          <div className="mainclock">
          <div className="days">
            <span className="day0">Sun</span>
            <span className="day1">Mon</span>
            <span className="day2">Teu</span>
            <span className="day3">Wed</span>
            <span  className="day4">Thu</span>
            <span className="day5">Fri</span>
            <span className="day6">Sat</span>
            </div>   
        <p className="time">{TimeUpdate()}</p>
        <div className="date"> <p id="innerdate">{date}</p> <p id="month">{monthname[month-1]}</p><p id="Year">{Year}</p></div>
          </div>
        </div>
        
        </>
    );

}
export default Clock;