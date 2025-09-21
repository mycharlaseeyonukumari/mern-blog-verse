import NavBar from "./NavBar.jsx"
import { Link } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react'
function SignIn() {
    const [showPassWord, SetShowPassWord] = useState(false);
    const handlePassWord = () => {
        SetShowPassWord((PassWord) => !PassWord)
    }
    return (
        <div className="flex flex-col justify-center items-center h-[50]">
            <NavBar />
            <form className='flex flex-col border-1 border-black rounded-2xl justify-center  gap-5  mt-50 w-[90%] md:w-1/3'>
                <div className="text-center">
                    <h1 className="font-bold flex flex-col">Sign In</h1>
                    <p classNmae=""> Access your account</p>
                </div>
                <div className="px-5 py=3 w-[90%]">
                    <p className="text-md text-gray-700 font-semibold ">Email Address</p>
                    <input type="Email" placeholder="sample@gmail.com" className="border-1 rounded-2xl  w-full px-20 py-3 cursor-pointer" />
                </div>
                <div className="px-4 py-3 w-[90%]">
                    <p className="text-md text-gray-700 font-semibold">Password</p>
                    <div className="relative w-full">
                        <input type={showPassWord ? "text" : "Password"} placeholder="sample123" className="border-1 rounded-2xl w-full px-20 py-3 cursor-pointer" />
                        <p onClick={handlePassWord}>{showPassWord ? <Eye className="absolute top-3 right-3" /> : <EyeOff className="absolute top-3 right-3 " />}</p>
                    </div>
                </div>
                <div className=" flex gap-3 px-5 py-3 w-[90%]">
                    <input type="checkbox" name=" " id="" className="cursor-pointer" />
                    <p>Remember me</p>
                    <p className="text-blue-700">forgot password?</p>
                </div>
                <div className="px-4 py-3 ">
                    <button className="border-1 bg-blue-700 rounded-2xl px-20 py-3 cursor-pointer w-[90%] ">Sign In</button>
                </div>
                <div className=" flex flex-items center px-5 py-3 w-[90%] ">
                    <p>Don't have an account?</p>
                    <p className="text-blue-700 ">Create one here</p>
                </div>
            </form>
        </div>
    )
}
export default SignIn;