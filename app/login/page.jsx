import Link from "next/link";
import styles from "./page.module.css"
import NavBar from "@/components/NavBar";

export default function login () {
  const loginNavbarClassName = "fixed w-full z-30 top-0 bg-white text-gray-800";

    return (
   
<div className={styles.header}>
  <NavBar customClassName={loginNavbarClassName} />
<div class={styles.innerheader}>
<div class="h-screen flex flex-col justify-center items-center">
        {/* <div class="hidden lg:hidden xl:flex w-96 ">
        <img src="/EvergreenLogo.svg" alt="Evergreen Logo" />
        </div> */}
    <div class="bg-white w-96 shadow-xl rounded-lg p-5 py-8 mt-20">
        <p class="text-sm text-gray-800">Welcome Back! Please sign into your account.</p>
            <form class="space-y-5 mt-5">
                <input type="text" class="w-full h-12 border border-gray-800 rounded px-3" placeholder="Email" />
                
        <div class="w-full flex items-center  border border-gray-800 rounded px-3">
       
        <input type="password" class="w-4/5 h-12"  placeholder="Password" />
        <span class="text-blue-700 hover:bg-blue-400 rounded-full px-3 ">Reveal</span>
      </div>
      <div class="">
            <a href="#!" class="font-medium text-blue-700 hover:bg-blue-300 rounded-full p-2">Forgot Password?</a>
      </div>
      <button class="text-center w-full bg-blue-700 rounded-full text-white py-3 font-medium">Login</button>
    </form>
  </div>
  <p class="text-gray-800 pt-8">New to Evergreen Lawncare?</p> <Link href="/signup" class="text-blue-700 font-medium">Sign Up</Link>  
  <div className="w-full h-10 overflow-hidden">
      <div className={styles.wave}></div>
    </div>
</div>

</div>
<div>
  <svg className={styles.wave} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
    <defs>
      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
    </defs>
    <g className={styles.parallax}>
      <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
      <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
      <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
      <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
    </g>
  </svg>
</div>
</div>
    );
}





