
import React from "react";


export default function Singin() {
    return (
        <>
        <br></br>
        <br></br>
            <div class="grid gap-4 grid-cols-2 header p-5  border-black border  mb-36 ">
                <div class="text-5xl font-lobster ">Account</div>
            </div>
            <h1 class="text-center title text-5xl font-lobster p-5 ">Cook Ease</h1>
            <h1 class="text-center title text-4xl font-Noto Serif p-4">Sign In</h1>
            <div class="flex items-center justify-center">
                <label class="block p-5 ">
                    <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-72 rounded-md sm:text-sm focus:ring-1" placeholder="Email" />
                </label>
            </div>
            <div class="flex items-center justify-center">
                <label class="block pt-5">
                    <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-72 rounded-md sm:text-sm focus:ring-1" placeholder="password" />
                </label>
            </div>
            <p class="text-center text-xs ml-28 " >Don’t have an account? sign up</p>
            <div class="flex items-center justify-center mt-14">
                <button class="px-4 py-2 justify-stretch text-white font-semibold bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-150 ease-in-out w-72">
                    SIGN IN
                </button>
            </div>
        </>
    );

}