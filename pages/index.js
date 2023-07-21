import Head from "next/head";
import Form from "./component/Form";


export default function Home(){
  return (
    <>

    <Head>
      <title> Cookie Stand Admin</title>
    </Head>

    

      <header className="flex justify-start w-full h-1/4 bg-lime-500 ">
        <h1 className="h-1/4">   Cookie Stand Admin  </h1>
      </header>

      <main className= "grid  place-items-center h-56" >  
          <Form></Form>
      </main>

      <footer className="p-4 mt-8 bg-lime-500 text-gray-50 object-bottom ">
        &copy;2023
      </footer>

    
    </>
   
  )
};