import { auth } from "@clerk/nextjs";

const adminIds = ["user_2vnzQJOVoh5YtlTYfS6BQn8DRDP"];

export const isAdmin = () =>{
  const {userId} = auth();

  if(!userId){
    return false;
  }

  return adminIds.indexOf(userId) !== -1;

}