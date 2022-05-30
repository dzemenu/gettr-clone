import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { setSigningOut } from "../store/store";

const NavBar = () => {
  const navigate=useNavigate()
  const name=useSelector(state=>state.signing)?.split(' ')[0].toUpperCase()
  const dispatch=useDispatch()
  useEffect(() => {

  },[name])
  const handleSignOut = () => {
   
    navigate("/login")
    
    dispatch(setSigningOut())

  }
  return (
    <div className=" top-0 z-50 fixed h-10 flex w-full justify-between pb-16 pt-1 bg-neutral-50 border-b-2 ml-20  ">
     <div className="w-1/5 mx-50 ">
     <button type="button" className="p-2 sm:mr-4 lg:hidden">
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
        <svg
          width="170"
          height="50"
          viewBox="0 0 700 297"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="jss1205 hidden lg:flex"
        >
          <path
            d="M377.286 37.6062C386.381 51.949 391.979 65.942 390.054 78.8856C386.381 104.073 354.547 121.214 348.075 136.607C324.987 112.993 310.819 96.9015 308.545 81.8591C305.047 54.048 344.927 31.3093 348.075 0C355.247 9.09545 357.346 24.8376 357.346 33.933C360.844 29.3853 362.943 23.6132 362.943 17.8411C369.765 25.887 371.864 39.8801 371.864 50.3748C375.187 47.0515 377.111 42.5037 377.286 37.6062Z"
            fill="#FF0000"
          ></path>
          <path
            d="M201.848 181.908H266.741V152.348H162.843V293.677H266.741V264.467H201.848V237.88H258.695V208.495H201.848V181.908Z"
            fill="#070731"
          ></path>
          <path
            d="M429.41 152.348V181.908H466.492V293.677H505.497V181.908H542.229V152.348H429.41Z"
            fill="#070731"
          ></path>
          <path
            d="M668.341 243.827C678.311 239.279 686.357 231.583 691.254 221.788C696.152 211.993 697.551 200.798 695.277 190.129C693.003 179.459 687.056 169.839 678.486 163.017C669.915 156.196 659.42 152.348 648.401 152.348C621.289 152.348 594.178 152.348 567.066 152.348C567.066 200.274 567.066 248.375 567.066 296.301C580.185 296.301 593.128 296.301 606.247 296.301C606.247 280.209 606.247 264.117 606.247 248.025C612.544 248.025 618.841 248.025 625.137 248.025C634.932 264.117 644.553 280.209 654.348 296.301C669.565 296.301 684.783 296.301 700 296.301C689.505 278.809 679.01 261.318 668.341 243.827ZM651.899 213.217C648.401 216.715 643.853 218.639 638.955 218.639C628.111 218.639 617.266 218.639 606.247 218.639C606.247 206.396 606.247 194.152 606.247 181.908C617.091 181.908 627.936 181.908 638.955 181.908C643.853 181.908 648.576 183.832 651.899 187.33C655.397 190.828 657.321 195.376 657.321 200.274C657.321 205.171 655.397 209.719 651.899 213.217Z"
            fill="#070731"
          ></path>
          <path
            d="M367.666 181.908H395.827L413.668 152.348H282.483L300.324 181.908H328.485V293.677H367.666V181.908Z"
            fill="#070731"
          ></path>
          <path
            d="M129.785 285.631C114.218 292.278 97.2514 296.301 80.11 296.301C68.2159 296.301 56.3218 294.377 45.4773 290.004C38.8306 287.205 32.5337 283.357 27.1114 278.81C21.5142 274.087 16.7916 268.665 12.7686 262.718C8.74563 256.771 5.59719 250.124 3.32333 243.302C1.04946 236.481 0 229.134 0 221.963C0 207.445 4.3728 193.102 12.4188 181.033C20.4648 168.965 32.009 159.519 45.4773 153.922C52.2989 151.123 59.1204 149.374 66.4668 148.5C70.1399 147.975 73.6382 147.8 77.3113 147.625C80.9845 147.45 84.4828 147.625 88.1559 147.8C102.674 148.85 116.842 152.523 130.135 158.295C124.013 168.44 117.891 178.585 111.769 188.555C101.974 183.482 91.3043 180.684 80.2848 180.684C68.3908 180.684 57.1964 185.756 49.3253 194.677C41.4543 203.597 37.956 215.491 39.3553 227.21C40.9295 238.93 47.4013 249.424 57.1964 256.071C66.9915 262.718 79.2354 264.642 90.7796 261.668C90.7796 247.325 90.7796 232.982 90.7796 218.64C103.898 218.64 116.842 218.64 129.96 218.64C129.785 241.028 129.785 263.242 129.785 285.631Z"
            fill="#070731"
          ></path>
        </svg>
      </div>
      <div className="hidden w-2/5 justify-center lg:flex items-center mt-5 pt-3.5 relative ">

      <input className="bg-slate-200 h-10 rounded-full w-full mx-auto pl-16  focus:bg-white" placeholder="search" />
      <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none top-4 left-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
  </span>
      </div >
     
     {name?.length>0 ? <div className="w-2/5 hidden lg:flex space-x-10 mx-20 pt-3.5"><h1> Welcome {name}</h1><div className=" bg-[#3D3C7C]	cursor-pointer	 text-white p-6 items-center justify-center  rounded-full shadow-lg" onClick={()=>{handleSignOut();signOut(auth)}}>
          Sign Out
        </div></div>:
      <div className="w-1/4  space-x-10 mx-20 pt-3.5 hidden lg:flex ">
        <div className="text-xl font-extrabold cursor-pointer hover:underline " onClick={()=>navigate('/login')} >
          Log In
        </div>
        <div className=" bg-[#3D3C7C]	cursor-pointer	 text-white p-4 items-center justify-center flex rounded-full shadow-lg" onClick={()=>navigate('/signup')}>
          Sign Up
        </div>
        <div className="">|</div>
        <div>...</div>
        
      </div>
}</div>
   
  );
};

export default NavBar;
