import React from 'react'



class Timer extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            clickbtn :false,
            time: 0,
            seconds:0,
            minutes:0,
            hours:0
           
        }
      
        setInterval(
            () => {
                if(this.state.clickbtn){
            this.setState({
                time: this.state.time + 1000
            })
            this.ConvertTime(this.state.time)
         
        }},
            1000
            )
        }
           ConvertTime = ( ms ) => {
        
            this.setState({
            hours: Math.floor(ms / 3600000),
            minutes: Math.floor((ms - (this.state.hours * 3600000)) / 60000),
            seconds: parseInt((ms - (this.state.hours * 3600000) - (this.state.minutes * 60000)) / 1000)
            })
            
    }

    
     Click = () => {
        this.setState( {clickbtn: !this.state.clickbtn} )
    }
  
    Reset = () => {
        this.setState({ clickbtn:false, time: 0, hours:0, minutes:0 , seconds:0});
    };


render(){

   
return (
    <div class="InterfaceTime">
    <div className="blockTime">
    
    <div  className="content">
       <div className="time">
       <div><h1>{String(this.state.hours).padStart(2,'0')} :</h1><p>Hours</p></div>
       <div><h1>{String(this.state.minutes).padStart(2,'0')} :</h1><p>Minutes</p></div>
       <div><h1>{String(this.state.seconds).padStart(2,'0')}</h1><p>Seconds</p> </div>
       </div>
    
     <div className="clickContent">
     <button className="buttonTime" onClick={this.Click}>{this.state.clickbtn ? 'Stop' : 'Start'}</button>
     <button className="buttonTime" onClick={this.Reset}>Reset</button>
     </div>
     </div>
     </div>
 </div>
 
);



}
}

export default Timer;
