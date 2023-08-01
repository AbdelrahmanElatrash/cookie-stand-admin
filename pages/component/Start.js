import Image from "next/image"

const Start=()=>{
    return (
        <>
        <div className="hero-content flex bg-green-300 p-4 space-x-4">
                 {/*  Thanks to https://unsplash.com/photos/Kw_zQBAChws?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink */}
                <Image src="/71MjTv5laSL.jpg"  alt="stand" width={"260"} height={180} />
                <div className="bg-green-300 p-4">
                    <h1 className="text-5xl font-bold">Cookie Stand</h1>
                    <p className="text-2xl p-6">Cookie Stand,Cookie Stand,Cookie Stand</p>
                    {/* <a href="{% url 'login' %}" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Started</a> */}
                </div>
      </div>
        </>
    )
};

export default Start