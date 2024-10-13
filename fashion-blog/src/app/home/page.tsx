
import Link from "next/link";
export default function Home2(){
    return(
    
<div>

{/* Headding */}
<h1 style={{fontFamily:"Updock Static"}} className="text-[80px] text-center max-sm:flex justify-start max-sm:text-[60px]">Hello Fashion</h1> 
<br></br>



{/* image  */}
<div className="flex justify-center  max-sm:inline">

<div className= "max-sm:h-[300px] bg-dark-purple w-[800px] h-[560px] rounded-xl shadow bounce-in-top max-sm:w-[330px]   ">
<img className="p-8 " src="https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
</div>
</div>


{/* paragarph */}

<div className="flex justify-center text-center max-sm:flex max-sm:justify-start max-sm:text-start">
  <div style={{fontFamily:"Updock Static"}} className="text-[20px] font-semibold">
  <p style={{fontFamily:"Updock Static"}} className="text-[30px] font-medium text-center  max-sm:text-[14px] ">"Fashion is part of the daily air and 
    <br></br>
    it changes all the time, with all the events.
    <br></br>
     You can even see the approaching of a revolution in clothes.
     <br></br>
      You can see and feel everything in clothes."</p>
  </div>
</div>

<br></br>

{/* Ideas */}
<div style={{fontFamily:"Updock Static"}} className="text-[80px] flex justify-center max-sm:flex max-sm:justify-start">"Ideas"</div>
<br/>


{/* Cards */}

<div className=" max-sm: flex justify-center  gap-10  max-sm:inline">
  <div className="bg-dark-purple h-[550px] w-[430px] rounded-xl shadow  bounce-in-top shadowhover max-sm:w-[340px] max-sm:h-[540px] max-sm:mb-5">
  <img className="p-6 h-[400px] w-[420px]" src="https://plus.unsplash.com/premium_photo-1673384389924-097135cbf1cd?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <p style={{fontFamily:"Updock Static"}} className="text-[25px] font-medium p-3">Bags ideas</p>
    <Link href={"/bags"}><button style={{fontFamily:"Updock Static"}} className="text-[25px] font-medium p-3 hover:bg-light-purple rounded-lg button ml-3">More</button></Link>
  </div>
  <div className="bg-dark-purple h-[550px] w-[430px] rounded-xl shadow bounce-in-top shadowhover max-sm:w-[340px] max-sm:h-[540px] max-sm:mb-5 ">
  <img className="p-6 h-[400px] w-[420px]" src="https://images.unsplash.com/photo-1552046122-03184de85e08?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <p style={{fontFamily:"Updock Static"}} className="text-[25px] font-medium p-3">Skin care ideas</p>
    <Link href={"/skin-care"}><button style={{fontFamily:"Updock Static"}} className="text-[25px] font-medium p-3 hover:bg-light-purple rounded-lg button ml-3">More</button></Link>
  </div>
  <div className="bg-dark-purple h-[550px] w-[430px] rounded-xl shadow bounce-in-top shadowhover max-sm:w-[340px] max-sm:h-[540px] max-sm:mb-5 ">
  <img className="p-6 h-[400px] w-[420px]" src="https://plus.unsplash.com/premium_photo-1674748385760-d846825598ab?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <p style={{fontFamily:"Updock Static"}} className="text-[25px] font-medium p-3">jewellry ideas</p>
    <Link href={"/jewellery"}><button style={{fontFamily:"Updock Static"}} className="text-[25px] font-medium p-3 hover:bg-light-purple rounded-lg button ml-3">More</button></Link>
  </div>
  
  </div>

<br />

<div className=" flex  justify-center gap-10 max-sm:inline">
  <div className="bg-dark-purple h-[550px] w-[430px] rounded-xl shadow bounce-in-top shadowhover  max-sm:w-[340px] max-sm:h-[540px] max-sm:mb-5">
  <img className="p-6 h-[400px] w-[420px]" src="https://images.unsplash.com/photo-1508881136857-d1781947f4d6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <p style={{fontFamily:"Updock Static"}} className="text-[25px] font-medium p-3">Cool Autumn ideas</p>
    <Link href={"/autumn"}><button style={{fontFamily:"Updock Static"}} className="text-[25px] font-medium p-3 hover:bg-light-purple rounded-lg button ml-3">More</button></Link>
  </div>
  <div className="bg-dark-purple h-[550px] w-[430px] rounded-xl shadow bounce-in-top shadowhover  max-sm:w-[340px] max-sm:h-[540px] max-sm:mb-5 ">
  <img className="p-6 h-[400px] w-[420px]" src="https://i.pinimg.com/736x/16/c8/08/16c808d4dc74f93958d279b656351e69.jpg" alt="" />
    <p style={{fontFamily:"Updock Static"}} className="text-[25px] font-medium p-3">Hijab ideas</p>
    <Link href={"/hijab"}><button style={{fontFamily:"Updock Static"}} className="text-[25px] font-medium p-3 hover:bg-light-purple rounded-lg button ml-3">More</button></Link>
  </div>
  {/* <div className="bg-dark-purple h-[550px] w-[430px] rounded-xl shadow bounce-in-top shadowhover  max-sm:w-[340px] max-sm:h-[540px] max-sm:mb-5 ">
  <img className="p-6 h-[400px] w-[420px]" src="https://plus.unsplash.com/premium_photo-1711051513016-72baa1035293?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <p style={{fontFamily:"Updock Static"}} className="text-[25px] font-medium p-3">Shoes ideas</p>
    <button style={{fontFamily:"Updock Static"}} className="text-[25px] font-medium p-3 hover:bg-light-purple rounded-lg button ml-3">More</button>
  </div> */}
  
  </div>














































</div>

    )
}