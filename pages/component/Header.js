import {useAuth} from "../../contexts/auth";



const Header =()=>{

    const {login, user, logout} = useAuth();

    
    const [username , password]=  ['root','root']


    return (
        <header className=" relative justify-start p-4 w-full  bg-lime-500 ">
        <h1 className="text-xl font-bold italic h-1/4">   Cookie Stand Admin  </h1><br></br>

        <div class="relative w-full bottom-0 right-0">
          <nav class="absolute bottom-0 right-0 ">
            <ul  className="flex inline-flex items-baseline ">

              {user ? (
                  <li className="mx-1.5 hover:bg-lime-700 rounded-lg bg-lime-50"><button onClick={logout}>logout</button></li>
              ):(
                  <li className="mx-1.5 hover:bg-lime-700 rounded-lg bg-lime-50"><button onClick={()=>login(username,password)}>login</button></li>
              )
              }
              
              <li className="mx-1.5 hover:bg-lime-700 rounded-lg bg-lime-50">about</li>
            </ul>
          </nav>
        </div>
        
      </header>
    )
}

export default  Header 