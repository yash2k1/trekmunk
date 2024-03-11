'use client'
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { LockOpen1Icon, LockOpen2Icon, PersonIcon } from "@radix-ui/react-icons";
import { Key } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
interface LoginProps { }
const Login: React.FC<LoginProps> = () => {
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const activateInput = (ref: React.RefObject<HTMLInputElement | null>) => {
    if (ref.current) {
      ref.current.focus();
    }
  };
  return (

    <div className="min-w-[250px] w-[80%] h-fit sm:w-1/2 shadow-xl border max-w-[430px] ">
      {/* company logo */}
      <Image
        src={"https://trekmunk.b-cdn.net/trekmunk-logo-black.png"}
        className="object-contain flex justify-center p-6 mx-auto  "
        alt={"logo"}

        height={"100"}
        width={"250"}
      />
      {/* company login heading */}
      <h1 className="text-gray-500 text-xl flex justify-center w-full">Login with Trekmunk</h1>
        {/*email field*/}
      <div className="flex items-center flex-col space-x-2 w-full justify-center p-6 ">
        <div
          className="flex w-[90%] items-baseline rounded-md border border-gray-600 focus-visible:border-1 focus-visible:ring-2 overflow-hidden mt-3"
          onClick={() => activateInput(emailInputRef)}
        >
          <PersonIcon className="h-full w-4 mx-2" />
          <Input
            type="email"
            placeholder="Email"
            className="border-0 focus-visible:border-0 focus-visible:ring-0 focus-visible:ring-white focus-visible:outline-none"
            ref={emailInputRef}
          />
        </div>
        {/* email error message*/}
        <div className="text-sm text-red-500 w-[90%] flex">Please enter value for Email</div>

        {/*password field*/}
        <div
          className="flex w-[90%]  items-baseline mt-3 rounded-md border border-gray-600 focus-visible:border-1 focus-visible:ring-2 overflow-hidden"
          onClick={() => activateInput(passwordInputRef)}
        >
          <Key className="h-full w-4 mx-2 -rotate-180 scale-x-[-1]" />
          <Input
            type="password"
            placeholder="Password"
            className="border-0 focus-visible:border-0 focus-visible:ring-0 focus-visible:ring-white focus-visible:outline-none"
            ref={passwordInputRef}
          />
        </div>
        {/* password error message*/}
        <div className="text-sm text-red-500 w-[90%] flex">Please enter value for Password</div>
        {/* remember me */}
        <div className="flex items-center space-x-2 w-[90%] my-3 ">
          <Checkbox id="terms" className="data-[state=checked]:bg-blue-600" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remember Me
          </label>
        </div>

        <Button type="submit" className="my-3 w-[90%] font-bold bg-yellow-500 hover:bg-yellow-400 gap-2 hover:text-white "> <LockOpen1Icon /> Login</Button>
      </div>
      {/* footer for recover password */}
      <div className="p-6 border-t-[1px] border-black flex items-center justify-center">

        <button className="text-orange-400 hover:text-orange-600" >Recover password</button>
      </div>
    </div>


  );
}
export default Login;
