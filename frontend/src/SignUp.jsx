import { CircleUser } from 'lucide-react';
import { KeySquare } from 'lucide-react';
import { KeyRound } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import NavBar from "./NavBar.jsx"
import { Link } from 'react-router-dom'
import { useState } from 'react'
function SignUp() {
    const [formData, setformData] = useState({
        fullName: "",
        email: "",
        password: "",
        conformPassWord: ""

    })
         const [Errors,setErrors]= useState({
            fullName:"",
                    email:"",
                    password:"",
                    conformPassWord:""

        })
    

    const [showPassWord, SetShowPassWord] = useState(false);
    const [ConformPassWord, SetConformPassWord] = useState(false);
    const handlePassWord = () => {
        SetShowPassWord((PassWord) => !PassWord)
    }
    const handleConformPassWord = () => {
        SetConformPassWord((PassWord) => !PassWord)
    }
    const handleChange = (event) => {
        setformData((formData) => ({
            ...formData,
            [event.target.name]: event.target.value
        }))
        setErrors((Errors)=>({
            ...Errors,
            [event.teget.name]:""
        }))

    }
    const [Error, SetError] = useState('')
    const [Success, SetSuccess] = useState('')
    const handleSubmit = (event) => {
        SetError('')
        SetSuccess('')
        event.preventDefault();
        let newErrors={}
        if(!formData.fullName){
            newErrors.fullName="please enter your fullName "}
        if(!formData.email){
            newErrors.email="please enter your email"}
        if(!formData.password){
            newErrors.password="please enter your password "}
        if(!formData.conformPassWord){
            newErrors.conformPassWord="please enter your conformPassword "}
        else if(formData.password!==formData.conformPassWord)
        {
            newErrors.conformPassWord="your password did not matched"
        }
        if(Object.keys(newErrors).length>0)
        {
            setErrors(newErrors);
        }
        else{
            SetSuccess("your account has been created successfully")
            setformData(
                {
                    fullName:"",
                   email:"",
                   password:"",
                    conformPassWord:""})
        }
        //if (!formData.fullName || !formData.email || !formData.password || !formData.conformPassWord) {
        //     SetError("please fill all the fields")
        // }
        // else if (formData.password !== formData.conformPassWord) {
        //     SetError("your password did not matched")
        // }

        // else {
        //     SetSuccess("your acccount is created successfully")
        //     SetError('')
        //     setformData(
        //         {
        //             fullName:"",
        //             email:"",
        //             password:"",
        //             conformPassWord:""
        //         }
        //     )
        // }
    }
   





    return (
        <div className='flex items-center flex-col mt-10 gap-5'>
            <NavBar />
            <h1 className='font-bold text-2xl text-blue-700'>Join Blog-Verse</h1>
            <p className='font-bold'>create your Account and <br></br>start your Blogging journey today</p>
            <form onSubmit={handleSubmit} className='flex flex-col border-1 border-black rounded-2xl w-1/3 items-center gap-5'>
                <div className=' px-5 py-3 w-[90%] relative'>
                    <p className='text-md text-gray-700 font-semibold '>Full Name</p>
                    <input value={formData.fullName} onChange={handleChange} name="fullName" type="text" placeholder="enter your fullName" className=' py-4 px-3 w-full border-1  rounded-2xl focus:outline-none focus:border-purple-500' />
                    {Errors.fullName && <p className='text-red-500'>{Errors.fullName}</p>}

                </div>
                <div className=' px-5 py-3 w-[90%] relative'>
                    <p className='text-md text-gray-700 font-semibold '>Email</p>
                    <input value={formData.email} onChange={handleChange} name="email" type="Email" placeholder="Enter your Email" className='w-full  border-1  px-10 py-4 rounded-2xl focus:outline-none focus:border-purple-500' />
                    <Mail className="absolute top-13 left-7" />
                    {Errors.email && <p className='text-red-500'>{Errors.email}</p>}
                </div>
                <div className=' px-5 py-3 w-[90%] relative '>
                    <p className='text-md text-gray-700 font-semibold'>PassWord</p>
                    <input value={formData.password} onChange={handleChange} name="password" type={showPassWord ? "text" : "password"} placeholder="enter your PassWord" className='w-full py-4 border-1  px-10 rounded-2xl focus:outline-none focus:border-purple-500 ' />
                    <KeySquare className="absolute top-13 left-7" />
                    <p onClick={handlePassWord}>{showPassWord ? <Eye className="absolute top-13 right-7" /> : <EyeOff className="absolute top-13 right-7" />}</p>
                    
                </div>{Errors.password && <p className='text-red-500'>{Errors.password}</p>}
                <div className=' px-5 py-3 w-[90%] relative'>
                    <p className='text-md text-gray-700 font-semibold '>ConformPasssWord</p>
                    <input value={formData.conformPassWord} onChange={handleChange} name="conformPassWord" type={ConformPassWord ? "text" : "password"} placeholder="enter your ConformPassWord" className='w-full py-4 border-1  px-10 rounded-2xl focus:outline-none focus:border-purple-500' />
                    <KeyRound className="absolute top-13 left-7" />
                    <p onClick={handleConformPassWord}>{ConformPassWord ? <Eye className="absolute top-13 right-7" /> : <EyeOff className="absolute top-13 right-7" />}</p>

                </div>{Errors.conformPassword && <p className='text-red-500'>{Errors.conformPassWord}</p>}
                <div className='flex gap-2 w-[85%] justify-center border-1 border-gray-800 py-1 rounded-xl'>
                    < input type='checkbox' name="" id="" />
                    <p> I agree to the terms of service and privacy police</p>
                </div>
                {Error && <p className='text-red-500'>{Error}</p>}
                {Success &&<p className='text-green-500'>{Success}</p> }
                <button type="submit" className="bg-purple-700 text-white font-semibold border-1 flex gap-5  py-3 px-2 rounded-2xl w-90 "><CircleUser /><p >Create An Account</p></button>
                <p className=" text-center"> Already have an Account?</p>
                <Link to="/signin" className="text-blue-400"> Sign In Here</Link>
                <div>
                    <button className="cursor-pointer bg-gray-200 rounded-2xl py-3 px-4 ">Back to Home</button>
                </div>




            </form>
        </div>
    )
}

export default SignUp; 