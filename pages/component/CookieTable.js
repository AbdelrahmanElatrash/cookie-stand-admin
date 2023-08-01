import {calculateSum} from '../logic/sumTable'
import { useEffect , useState } from 'react';

const CookieTable= ({cookieData,deleteData})=>{

    const [totalResult, setTotalResult]=useState([])  
    

    useEffect(() => {
        if(cookieData.length >0){
            let result=calculateSum("data");
            
            setTotalResult(result)
        }
        
      },[cookieData]);

    
    

    if (cookieData.length == 0){
        return (
            <>
            <h2>No Cookie Stands Available</h2>
            </>
        )

    }else {
        return (
            <>
            <table className="w-1/2 mx-auto my-8 text-2xl text-center bg-lime-400 rounded-lg ">
                    <thead>
                        <tr>
                            <th className="border border-black">location</th>

                            <th className="border border-black">6am</th>
                            <th className="border border-black">7am</th>
                            <th className="border border-black">8am</th>
                            <th className="border border-black">9am</th>
                            <th className="border border-black">10am</th>
                            <th className="border border-black">11am</th>
                            <th className="border border-black">12am</th>
                            <th className="border border-black">1pm</th>
                            <th className="border border-black">2pm</th>
                            <th className="border border-black">3pm</th>
                            <th className="border border-black">4pm</th>
                            <th className="border border-black">5pm</th>
                            <th className="border border-black">6pm</th>
                            <th className="border border-black">7pm</th>
                            <th className="border border-black">total</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody  id="data" className="">
                        {cookieData.map((item,index1) =>(
                            <tr key={index1} >
                                <td className="border border-black ">{item.location } 
                                                                    <button onClick={()=>{deleteData(index1)}} className='bg-lime-600  hover:bg-red-700'
                                                                        ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                        </svg>
                                                                    </button></td>

                                {item.averageSaleHour.map((element,index2)=>(
                                     <td key={index2} className="border border-black">{element}</td>
                                ))}

                                <td className="border border-black">{item.averageSaleHour.reduce((acc, curr) => acc + curr, 0)}</td>

                                
                                
                            </tr>
                            
                        ))
                            
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                           <td className="border border-black">Total</td>
                           {totalResult.map((item,index)=>(
                             <td key={index} className="border border-black">{item}</td>
                           ))}
                           
                        </tr>
                    </tfoot>
                </table>
                
            </>
            
        )
    }
    
};

export default CookieTable



