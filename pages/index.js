import Head from "next/head";
import Form from "./component/Form";
import Header from "./component/Header";
import Footer from "./component/Footer";
import CookieTable from "./component/CookieTable";
import { useState } from "react";

export default function Home(){


  const [cookieData,setCookieData]=useState([])

  const addCookieData=(obj)=>{
    setCookieData([...cookieData,obj])
  }

  const [refresh, setRefresh] = useState(false);

  function handleReRenderComplete() {
        if (refresh){
            setRefresh(false);
        }else{
            setRefresh(true)
        }
        
      }

  const deleteData =(index)=>{
    console.log(index)
    console.log(cookieData)  

    cookieData.splice(index, 1)
    handleReRenderComplete()
    console.log(cookieData)  
    
};  

  return (
    <>

    <Head>
      <title> Cookie Stand Admin</title>
    </Head>

    <Header />

    <main className= "grid overflow-y-auto place-items-center h-3/4 my-9" >  
          <Form addCookieData={addCookieData} />
          
          <CookieTable cookieData={cookieData} deleteData={deleteData}/>
    </main>

    <Footer/>

    
    </>
   
  )
};