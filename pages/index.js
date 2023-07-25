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

  

  return (
    <>

    <Head>
      <title> Cookie Stand Admin</title>
    </Head>

    <Header />

    <main className= "grid  place-items-center h-56" >  
          <Form addCookieData={addCookieData} g_id={cookieData.length}/>
          <CookieTable cookieData={cookieData} />
    </main>

    <Footer/>

    
    </>
   
  )
};