import React,{useState,useEffect} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Weather.css';
import Card from './Card';


const Weather =()=>{

    const [searchValue , setSearchValue] = useState('bhilai');
    const [tempInfo , setTempInfo] = useState({});

    const getWeatherInfo= async()=>{
       try{
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=53a7a143b8e7b8556ad294638ff93ef5`;
        let res = await fetch(url);
        let data = await res.json();
        const { temp , humidity } = data.main;
        const { main:mood } = data.weather[0];
        const { name } = data;
        const { speed} = data.wind;
        const {country , sunset } = data.sys;
        const myNewWeather = {
            temp,
            humidity,
            mood,
            name,
            speed,
            country,
            sunset
        }
        setTempInfo(myNewWeather);
        
       }
       catch(e) {
           console.log(e);
       }

    };
    useEffect(()=>{
        getWeatherInfo();
    }, [] );


    return(
        <div className='bg-dark' style={{height:'100vh' , width:'100vw'}}>
            <br/>
            <br/>
            <h3 className='ar text-light'> Search weather of any city</h3>
            <div className='ew' style={{ marginTop:'2rem',marginLeft:'25rem',display:'flex' ,height:'7%', width:'38%', backgroundColor:'white' , borderRadius:'20px' }}>
                <SearchIcon className='are' onClick={getWeatherInfo} style={{height:'100%' ,color:'black'}} />
                
                <input
                style={{width:'80%' , height:'100%', borderRadius:'20px'}}
                marginLeft='5rem'
                placeholder=' search any  City'
                value={searchValue}
                
                onChange={(e)=>setSearchValue(e.target.value)}
                className='we'
                />
                
                <br/>
                <br/>
                
                
            </div>
            <div >
                    <Card tempInfo={tempInfo} />
            </div>
            
            

        </div>
    )
}
export default Weather;
