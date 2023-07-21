

function Form() {
    return (
        
        <div className='w-3/6 bg-lime-400'>
        <form onSubmit="" >
            <label>location:
                <input type="text" name="location"/>
            </label>

            <label>minimum customer per hour:
                <input type="text" name="minimum customer per hour" />
            </label>

            <label>maximum customer per hour:
                <input type="text" name="maximum customer per hour" />
            </label>

            <label>Average cookies per sale:
                <input type="text" name="Average cookies per sale" />
            </label>
            
        </form>
        </div>
    )
};

export default Form