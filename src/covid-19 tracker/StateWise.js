import React,{useState,useEffect} from 'react';
import axios from 'axios';
import imgg from './imgg.png';
import './StateWise.css';


const StateWise=()=>{

    



    return(
        <>
        <div >
            <div style={{width:'100%', height:'15vh', backgroundColor:'rgb(0, 51, 153)', display:'inline-flex'}}>
                <img src={imgg} style={{width:'19%' , height:'95%'}}/><br/><br/>

                <h4 style={{color:'white', marginTop:'35px' , marginLeft:'45px'}}>OFFICE OF THE CONTROLLER OF EXAMINATION </h4>

            </div>
            <div style={{width:'100%', height:'4vh', display:'flex' , backgroundColor:'black'}}>
                <h6 style={{color:'white'}}>20BCE10749 - A.AAYUSH - B.Tech. Computer Science and Engineering - SCSE </h6>

            </div>
            <div className='main-heading'>
                <br/>
                <br/>
                <hr/>
                <h2 className='mb-5 text-center'>INTERIM semester 2021-22 Results</h2>
            </div>
            <div className='table-responsive' >
                <table className='table table-hover'>
                    <thead className='thead' style={{backgroundColor:'rgb(51, 102, 153)'}}>
                        <tr>
                            <th>Sl.No.</th>
                            <th>ClassNbr</th>
                            <th>Cource Code</th>
                            <th>Course Title</th>
                            <th>Course Type</th>
                            <th>Credits</th>
                            <th>Grand Total</th>
                            <th>Grade</th>

                        </tr>

                    </thead>
                    <tbody style={{backgroundColor:'lightyellow'}}>


                        <tr>
                            <td>
                                1
                            </td>
                            <td>
                            BL2021225000153
                            </td>
                            <td>
                            MAT3002
                            </td>
                            <td>
                            Applied Linear Algebra
                            </td>
                            <td>
                            LT
                            </td>
                            <td>
                            3
                            </td>
                            <td>
                                97
                            </td>
                            <td>
                                A
                            </td>
                            
                        </tr>
                        <tr>
                            <td>
                                2
                            </td>
                            <td>
                            BL2021225000183
                            </td>
                            <td>
                            MAT2004
                            </td>
                            <td>
                            Operation Research
                            </td>
                            <td>
                            LT
                            </td>
                            <td>
                            3
                            </td>
                            <td>
                                94
                            </td>
                            <td>
                                A
                            </td>
                            
                        </tr>
                        <tr>
                            <td>
                                3
                            </td>
                            <td>
                            BL2021225000110
                            </td>
                            <td>
                            CSE2002
                            </td>
                            <td>
                            Data Structures and Algorithms
                            </td>
                            <td>
                            LTP
                            </td>
                            <td>
                            4
                            </td>
                            <td>
                                92
                            </td>
                            <td>
                                B
                            </td>
                            
                        </tr>
                        
                        

                    </tbody>

                </table>

            </div>
            
        </div>
        </>
       

        
    )
}
export default StateWise;
