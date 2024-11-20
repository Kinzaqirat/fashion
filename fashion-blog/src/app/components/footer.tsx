import Link from "next/link"
export default  function Footer(){
return(
    <div>
        <br />
        <br></br>
        <br></br>
   <hr></hr>
{/* Name */}
   <div>
   <h1 style={{fontFamily:"Updock Static"}} className="font-semibold text-3xl p-3 max-sm:justify-start max-sm:h-[100px] max-sm:w-[20px] "> Fresh <span style={{fontFamily:"Updock Static"}} className="text-dark-purple font-semibold">it</span> Up</h1>
   </div>






   <ul className="p-3 flex justify-center gap-14 max-sm:gap-4  max-sm:inline-block">
   <Link href={"/"}>   <li style={{fontFamily:"Updock Static"}} className="font-semibold">Home</li></Link>
<Link href={"/about"}>   <li style={{fontFamily:"Updock Static"}} className="font-semibold">About us</li></Link>
<Link href={"/contact"}>   <li style={{fontFamily:"Updock Static"}} className="font-semibold ">Contact us</li></Link>
    
    <button style={{fontFamily:"Updock Static"}} className="bg-dark rounded-md flex justify-center  ">
    <img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" width={20} height={20} alt="" />
  
    
    </button>
    
</ul>

<div className="w-[100vw] bg-black h-[90px] max-sm:w-[380px]">
<ul className="p-3 flex justify-center gap-14">
    <li style={{fontFamily:"Updock Static "}} className="font-medium text-white">TERMS OF USE</li>
    <li style={{fontFamily:"Updock Static"}} className="font-medium text-white">PRIVACY POLICY</li>
    <li style={{fontFamily:"Updock Static"}} className="font-medium text-white"> 2024 ALL RIGHTS RESERVED</li>
    
    
    
</ul>
</div>











    </div>
)
}