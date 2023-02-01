
import { useState } from 'react';
import '../App.css';
import Productpage from './productpage';
import Popup from './popup';

function App() {


  const [display,setdisplay]=useState("")



  return (
    <div className="App-header">

 
   
     

<Productpage display={setdisplay}/>




    
    </div>
  );
}

export default App;
