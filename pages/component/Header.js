import {useAuth} from "../../contexts/auth";
import Droplogin from "./Droplogin";


const Header =()=>{

    const {login, user, logout} = useAuth();

    
    


    return (
        <header className=" relative justify-start p-4 w-full  bg-lime-500 ">
        <h1 className="text-xl font-bold italic h-1/4">   Cookie Stand Admin  </h1><br></br>

        <div className="relative w-full bottom-0 right-0">
          <nav className="absolute bottom-0 right-0 ">
            <ul  className="flex inline-flex items-baseline ">

              {user ? (
                  <li className="mx-1.5 hover:bg-lime-700 rounded-lg bg-lime-50"><button onClick={logout}>logout</button></li>
              ):(
                  <li className="mx-1.5 hover:bg-lime-700 rounded-lg bg-lime-50"> <Droplogin/> </li>
              )
              }
              
              {/* <li className="mx-1.5 hover:bg-lime-700 rounded-lg bg-lime-50">about</li> */}
            </ul>
          </nav>
        </div>
        
      </header>
    )
}

export default  Header 