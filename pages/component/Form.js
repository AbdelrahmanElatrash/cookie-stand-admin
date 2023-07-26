import {arrNumber} from '../logic/random'


function Form({addCookieData,g_id}) {


    function handelFormData(event){
        event.preventDefault()
        const arrNumbers= arrNumber()
        let obj={id:g_id ,
                    location:event.target.location.value,
                    minimum:event.target.minimum.value,
                    maximum:event.target.maximum.value,
                    average:event.target.average.value,
                    averageSaleHour:arrNumbers
                }
        
        
        
        addCookieData(obj)
        

    }
    
    
    return (
        <div className="bg-lime-400 rounded-lg m-4 mx-auto">
            <h1>create a cookie stand</h1>

            <form className="" onSubmit={handelFormData}>
                
                <label >Location : <input className="flex-initial w-96" type="text" name="location"
                                    ></input></label> <br></br>

                <div className="flex content-around flex-row">

                    <div className="m-4">
                    <label>Minimum customer per hour : </label> <br></br>
                    <input type="text" name="minimum"  ></input>
                    </div>

                    <div className="m-4">
                    <label>Maximum customer per hour : </label><br></br>
                    <input type="text" name="maximum" ></input>
                    </div>

                    <div className="m-4">
                    <label>Average sale per hour : </label><br></br>
                    <input type="text" name="average" ></input>
                    </div>

                    <button className="bg-lime-600  hover:bg-lime-700 m-4 rounded-lg w-16" type="submit">Create</button>
                </div>
                <br></br>
                
            </form>
        </div>
    )
};

export default Form