"use client";
import { ChangeEvent, useState } from "react";
import { Input } from "@/app/_components/input/input";
import { Button } from "../_components/button/button";
import Link from "next/link";
import { signInAction } from "../_lib/actions";

const Page = () => {
  // const [inputData, setInputData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleInputchange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setInputData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  return (
    <div className="uppercase flex justify-center h-full pt-5">
      <form action={signInAction} className="flex flex-col gap-3 items-center border h-[75%] py-5 px-20">
        <h1 className="text-2xl mb-3">sign in</h1>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Email" />
        <Button name="regularBtn" className="bg-black text-white capitalize">Sign in</Button>
        <div className="text-sm">Don&apos;t have an account?</div>
        <Link href="/signup">
          <div className="text-sm underline">sign up</div>
        </Link>
        <div className="text-sm">or</div>
        <Button name="googleBtn" className="bg-blue-700 text-white capitalize">sign in with google</Button>
      </form>
    </div>
  );
};

export default Page;
