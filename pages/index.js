import Head from "next/head";
import Form from "./component/Form";


export default function Home(){
  return (
    <>

    <Head>
      <title> Cookie Stand Admin</title>
    </Head>

    

      <header className="justify-between h-3/6 w-full  bg-lime-500 ">
        <h1>Cookie Stand Admin</h1>
      </header>

      <main className='flex flex-col items-center '>
          <Form></Form>
      </main>

      <footer className="p-4 mt-8 bg-lime-500 text-gray-50 object-bottom ">
        &copy;2023
      </footer>

    
    </>
   
  )
};