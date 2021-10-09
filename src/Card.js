import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Card.css';


const Card=({tempInfo})=>{
    const {
        temp,
        humidity,
        mood,
        name,
        speed,
        country,
        sunset
    } = tempInfo;

    let sec = sunset;
    let date = new Date(sec*1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
    return(
        <div>
            <Jumbotron className='my bg-light' style={{marginLeft:'25rem',width:'29%' ,height:'37%' , marginTop:'5rem' , borderRadius:'20px'}}>
                
                
                
                
                <div className='as bg-dark' style={{display:'flex', height:'15vh' ,width:'20vw',borderRadius:'20px',marginRight:'4rem', marginLeft:'1.5rem' , marginTop:'2rem' ,height:'7rem'}}>
                    
                    <h1 className='text-light' style={{ marginTop:'5px', fontSize:'2.9rem'}}>{temp}</h1>
                    
                    <div style={{marginLeft:'10px'}}>
                        <h6 className='text-light' style={{fontSize:'1.5rem'}}>{mood}</h6>
                        <p className='text-light'  style={{fontSize:'1.5rem'}}> {name}  {country}</p>
                        
                    </div>
                    
                    
                  

                </div> 
                <div className='font' style={{marginLeft:'0.2rem', marginTop:'5px'}}>
                    <h4 >WindSpeed:{speed}km/h</h4>
                    <h4 >Humidity:{humidity}</h4>
                    <h4>SunSet:{timeStr}</h4>
                    
                </div>
                
                

            </Jumbotron>

        </div>
    )
}
export default Card;
