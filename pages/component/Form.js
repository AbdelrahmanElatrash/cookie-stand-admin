
const myStyle = {
    border: "3px solid red" ,
};
function Form() {
    return (
        <div className="bg-lime-400 rounded-lg" style={myStyle}>
            <h1>create a cookie stand</h1>

            <form>
                <label>Location : <input type="text" name="location"></input></label> <br></br>

                <div className="flex flex-row ">

                <div>
                <label>Minimum customer per hour : </label> <br></br>
                <input type="text" name="minimum"></input>
                </div>

                <div>
                <label>Maximum customer per hour</label><br></br>
                <input type="text" name="maximum"></input>
                </div>

                <div>
                <label>Average sale per hour</label><br></br>
                <input type="text" name="average"></input>
                </div>

                <button className="bg-lime-500">Create</button>
                </div>
            </form>
        </div>
    )
};

export default Form