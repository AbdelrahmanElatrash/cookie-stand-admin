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
                            <th className="border border-black">delete</th>
                            
                        </tr>
                    </thead>
                    <tbody  id="data" className="">
                        {cookieData.map((item,index1) =>(
                            <tr key={index1} >
                                <td className="border border-black">{item.location}</td>

                                {item.averageSaleHour.map((element,index2)=>(
                                     <td key={index2} className="border border-black">{element}</td>
                                ))}

                                <td className="border border-black">{item.averageSaleHour.reduce((acc, curr) => acc + curr, 0)}</td>

                                <td className="border border-black"><button onClick={()=>{deleteData(index1)}}
                                                                    className='bg-lime-600  hover:bg-red-700 m-4 rounded-lg w-16'
                                                                    >delete</button></td>
                                
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