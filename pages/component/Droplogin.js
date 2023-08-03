import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import {useAuth} from "../../contexts/auth";

function Droplogin() {

  const {login, user, logout} = useAuth();

  const [username , setUsername]= useState()
  const [password ,setPassword]=useState()

  const signin=(event)=>{
      event.preventDefault()
      login(username,password)

  }

  return (
    <Dropdown>
      <Dropdown.Toggle className="mx-1.5 hover:bg-lime-700 rounded-lg bg-lime-50 text-black" id="dropdown-basic">
        log in
      </Dropdown.Toggle>

      <Dropdown.Menu className='bg-lime-400 rounded-lg'>
         <form onSubmit={signin}>
                    <div className="m-4">
                    <label>user name: </label> <br></br>
                    <input type="text" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
                    </div>

                    <div className="m-4">
                    <label>password: </label> <br></br>
                    <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
                    </div>

                    
                    
                    <button className="mx-1.5 hover:bg-lime-700 rounded-lg bg-lime-50" type="submit">log in</button>
                    
         </form>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Droplogin 

// 