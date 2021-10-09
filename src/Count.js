import React,{useReducer} from 'react';
import {Button} from 'react-bootstrap';

const reducer=(state,action)=>{
    if (action.type ==='Add'){
        state=state+1;
    }
    else if (state>>0 && action.type === 'Subs'){
        state=state-1
    }
    return state;
}
const Count=()=>{
    
    const [state,dispatch] = useReducer(reducer,1);
    return(
        <div>
           <div style={{marginLeft:'50%' , marginTop:'50px'}}>
               <h3>{state}</h3>
               <br/>
           </div>
           <div style={{marginTop:'30px'}}>
           <Button className="btn-outline-success" style={{marginLeft:'35%' , width:'10%' , height:'7%'}} onClick={()=>dispatch({type:'Add'})}>Add</Button>
           <Button className="btn-outline-success" style={{marginLeft:'25px ', width:'10%' , height:'7%'}} onClick={()=>dispatch({type:'Subs'})}>Subs</Button>
           </div>
           
        </div>
    )
}
export default Count;
