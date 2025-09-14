function SignUp() {
    return (
        <div className='flex items-center flex-col mt-10 gap-5'>
            <h1 className='font-bold text-2xl text-blue-700'>Join Blog-Verse</h1>
            <p className='font-bold'>create your Account and <br></br>start your Blogging journey today</p>
            <form className='flex flex-col border-1 border-black rounded-2xl w-1/3 items-center gap-5'>
                <div className=' px-5 py-3 w-[90%]'>
                    <p className='text-md text-gray-700 font-semibold '>Full Name</p>
                    <input type="text" placeholder="enter your fullName" className=' py-4 px-3 w-full border-1  rounded-2xl focus:outline-none focus:border-purple-500' />
                </div>
                <div className=' px-5 py-3 w-[90%] '>
                    <p className='text-md text-gray-700 font-semibold '>Email</p>
                    <input type="Email" placeholder="Enter your Email" className='w-full py-4 border-1  px-3 rounded-2xl focus:outline-none focus:border-purple-500' />
                </div>
                <div className=' px-5 py-3 w-[90%] '>
                    <p className='text-md text-gray-700 font-semibold '>PassWord</p>
                    <input type="PassWord" placeholder="enter your PassWord" className='w-full py-4 border-1  px-3 rounded-2xl focus:outline-none focus:border-purple-500' />
                </div>
                <div className=' px-5 py-3 w-[90%] '>
                    <p className='text-md text-gray-700 font-semibold '>ConformPasssWord</p>
                    <input type="PassWord" placeholder="enter your ConformPassWord" className='w-full py-4 border-1  px-3 rounded-2xl focus:outline-none focus:border-purple-500' />
                </div>
                <div className='flex gap-2 w-[85%] justify-center border-1 border-gray-800  py-1 rounded-xl'>
                    < input type='checkbox' name="" id="" />
                    <p> I agree to the terms of service and privacy police</p>
                </div>
                <button className='bg-purple-700 text-white font-semibold border-1'>Create Account</button>
                <p className=" text-center"> Already have an Account?</p>


            </form>
        </div>
    )
}
export default SignUp; 