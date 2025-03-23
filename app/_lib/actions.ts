"use server";

import { signIn } from "@/app/_lib/auth";
import { getCollections } from "./data-service";

export async function signInAction(formData: FormData) {
  if (formData.has("googleBtn")) await signIn("google", { redirectTo: "/" });
  else{
    console.log("This is a regular signIn", formData);
  }
}

export async function getCollectionsAction(){
  try{
    await getCollections();
  }catch(error){
    console.log((error as Error).message)
  }
}