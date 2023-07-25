
const CookieTable= ({cookieData})=>{

    
    return (
        <>
         <table className="w-1/2 mx-auto my-8 text-2xl text-center bg-lime-400 rounded-lg">
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
                <tbody>
                    {cookieData.map(item => (
                        <tr key={item.id} >
                            <td className="border border-black">{item.location}</td>
                            <td className="border border-black"></td>
                            <td className="border border-black"></td>
                            <td className="border border-black"></td>
                            <td className="border border-black"></td>
                            <td className="border border-black"></td>
                            <td className="border border-black"></td>
                            <td className="border border-black"></td>
                            <td className="border border-black"></td>
                            <td className="border border-black"></td>
                            <td className="border border-black"></td>
                            <td className="border border-black"></td>
                            <td className="border border-black"></td>
                            <td className="border border-black"></td>
                            <td className="border border-black"></td>
                            <td className="border border-black"></td>
                            
                        </tr>
                    ))
                
                    }
                </tbody>
                <tfoot>
                    <tr>

                    </tr>
                </tfoot>
            </table>
        </>
    )
};

export default CookieTable