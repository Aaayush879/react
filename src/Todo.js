import React,{useState, useEffect} from 'react';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import './Todo.css';
import {Button} from 'react-bootstrap';

const getLocalData =()=>{
    const lists = localStorage.getItem('todoList');

    if(lists){
        return JSON.parse(lists);
    }
    else{
        return[];
    }
}

const Todo =()=>{

    const [inputData , setInputData] = useState('');
    const [items , setItems] = useState(getLocalData());

    const addItems=()=>{
        if(!inputData){
            alert('plz fill form');
        }
        else{
            const myNewInputData={
                id: new Date().getTime().toString(),
                name: inputData,
            }
            setItems([ ...items , myNewInputData]);
            setInputData("");
        }
        console.log(items)
    }
    const removeAll=()=>{
        setItems([]);
    }
    const handleChange=(e)=>{
        setInputData(e.target.value);
        

    }
    const deleteItem= (index) =>{
        const updatedItems = items.filter((curElem)=>{
            return curElem.id !==index;
        });
        setItems(updatedItems);

    }
    useEffect(()=>{
        localStorage.setItem('todoList', JSON.stringify(items));
    }, [items]);


    return(
        <div className='bg-info' style={{height:'100vh'}}>
            <div style={{ alignItems:'center'}}>
                <p style={{fontSize:'20px' ,textAlign:'center'}}>Write Your Task To Be Perform</p>
                <div style={{borderRadius:'20px' , width:'20%' ,height:'30px' , marginLeft:'40%' ,display:'flex' ,backgroundColor:'white' }}>
                    <AddIcon className='my' style={{marginRight:'20px'}} onClick={addItems}/><br/>
                    <input
                    className='input'
                    placeholder='Enter'
                    border= 'None'
                    marginLeft='2%'
                    width='95%'
                    height='90%'
                    value={inputData}
                    onChange={handleChange}

                    />
                    
                    

                </div>
                <div >
                    {items.map((curElem)=>{
                        return(
                            <div className='we bg-success' key={curElem.id} style={{alignItems:'center' ,width:'30%' , height:'5%' , marginLeft:'40%' , marginTop:'20px' , display:'flex'}}  >
                                <p className='text-light' style={{fontSize:'20px' , marginLeft:'20%' , width:'70%'}}>{curElem.name}</p>
                                <CreateIcon className='as' style={{marginRight:'5px'}}/>
                                <DeleteOutlineIcon className='as' style={{marginRight:'15px'}} onClick={()=>deleteItem(curElem.id)}/>
                            </div>
                        )
    

                    })}
                    
                </div>
                <Button className='btn btn-outline-success' style={{marginLeft:'45%' , marginTop:'10px'}} onClick={removeAll} >Remove</Button>
            </div>

        </div>
    )
}
export default Todo;
