import {arrNumber} from '../logic/random'
import {useAuth} from "../../contexts/auth";


function Form({onCreate}) {

    const {user} = useAuth(); 

    function handelFormData(event){
        event.preventDefault()
        const arrNumbers= arrNumber()
        const obj={
                    location:event.target.location.value,
                    minimum_customers_per_hour:event.target.minimum.value,
                    maximum_customers_per_hour:event.target.maximum.value,
                    average_cookies_per_sale:event.target.average.value,
                    hourly_sales:arrNumbers,
                    owner:user.id
                };
        // console.log(obj);
        onCreate(obj);

    };
    
    
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