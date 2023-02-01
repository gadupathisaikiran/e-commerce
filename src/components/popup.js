import React from 'react'
import '../App.css';
export default function Popup(props) {
    let data=props.disdata
    let setdisplay=props.display

let Image=props.disdata.images[0]

    console.log(props.disdata)


  return (

    <div className='popup' style={{color:"black",display:"inline-block",width:"40%",height:"30%",padding:"10px"}}>




    <div style={{width:"100%",height:"100%"}}>
    <img src={Image} alt='img' style={{width:"50%",height:"50%"}}></img>
    <button style={{backgroundColor:"orange",cursor:"pointer",marginLeft:"20%"}} onClick={()=>{setdisplay("")}}>CLOSE</button>

    <h4 >Description:  {data.description}</h4>
    </div>
   
  
    
    
    
   

</div>









    
  )
}


