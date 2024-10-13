import Link from "next/link"
export default function Header(){
    return(
    <div>
        <div className="flex justify-between bg-white w-[100%] h-[60px] max-sm:h-[100px] max-sm:w-[20px]  ">
        <h1 style={{fontFamily:"Updock Static"}} className="font-semibold text-3xl p-3 max-sm:justify-start "> Fresh <span style={{fontFamily:"Updock Static"}} className="text-dark-purple font-semibold">it</span> Up</h1>
<ul className="p-3 flex justify-center gap-14 max-sm:gap-8">
 
<Link href={"/"}>   <li style={{fontFamily:"Updock Static"}} className="font-semibold">Home</li></Link>
<Link href={"/about"}>   <li style={{fontFamily:"Updock Static"}} className="font-semibold">About us</li></Link>
<Link href={"/contact"}>   <li style={{fontFamily:"Updock Static"}} className="font-semibold ">Contact us</li></Link>
    
    <button style={{fontFamily:"Updock Static"}} className="bg-dark rounded-md flex justify-center  ">
    <img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" width={20} height={20} alt="" />
  
    
    </button>
    
</ul>

        </div>
        <hr />
    </div>
    )
}