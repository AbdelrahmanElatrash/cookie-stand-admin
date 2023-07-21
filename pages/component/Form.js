
const myStyle = {
    border: "3px solid red" ,
};
function Form() {
    return (
        <div className="bg-lime-400 rounded-lg" style={myStyle}>
            <h1>create a cookie stand</h1>

            <form className="">
                <label >Location : <input className="flex-initial w-96" type="text" name="location"></input></label> <br></br>

                <div className="flex flex-row justify-around">

                    <div className="">
                    <label>Minimum customer per hour : </label> <br></br>
                    <input type="text" name="minimum"></input>
                    </div>

                    <div className="">
                    <label>Maximum customer per hour : </label><br></br>
                    <input type="text" name="maximum"></input>
                    </div>

                    <div className="">
                    <label>Average sale per hour : </label><br></br>
                    <input type="text" name="average"></input>
                    </div>

                    <button className="bg-lime-600  hover:bg-lime-700">Create</button>
                </div>
                <br></br>
            </form>
        </div>
    )
};

export default Form