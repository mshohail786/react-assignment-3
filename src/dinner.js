import React from 'react' ;
import './dinner.css'

function Dinner (props) { 
    return (
    <div className='div-1'>
        <h1>Student Name    ................. {props.sname} </h1>
        
        <h1>Student Age     .................. {props.age} </h1>
        <h1>Subject Math    .................. {props.math} </h1>
        <h1>Subject Urdu    .................. {props.urdu}  </h1>
        <h1>Subject English .................. {props.eng} </h1>
        
        
        <hr />
    </div>   
     )
}

export default Dinner