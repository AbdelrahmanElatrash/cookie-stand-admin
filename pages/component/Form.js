
import { useState } from "react";

const myStyle = {
    border: "3px solid red" ,
};


function Form({addCookieData,g_id}) {

    const [formData, setFormData]=useState({})
    


    function handelFormData(event){
        setFormData({id:g_id ,
                    location:event.target.location.value,
                    minimum:event.target.minimum.value,
                    maximum:event.target.maximum.value,
                    average:event.target.average.value})

        
        event.preventDefault()
        addCookieData(formData)

    }
    
    
    return (
        <div className="bg-lime-400 rounded-lg" style={myStyle}>
            <h1>create a cookie stand</h1>

            <form className="" onSubmit={handelFormData}>
                
                <label >Location : <input className="flex-initial w-96" type="text" name="location"
                                    ></input></label> <br></br>

                <div className="flex content-around flex-row">

                    <div className="">
                    <label>Minimum customer per hour : </label> <br></br>
                    <input type="text" name="minimum"  ></input>
                    </div>

                    <div className="">
                    <label>Maximum customer per hour : </label><br></br>
                    <input type="text" name="maximum" ></input>
                    </div>

                    <div className="">
                    <label>Average sale per hour : </label><br></br>
                    <input type="text" name="average" ></input>
                    </div>

                    <button className="bg-lime-600  hover:bg-lime-700" type="submit">Create</button>
                </div>
                <br></br>
                
            </form>
        </div>
    )
};

export default Form