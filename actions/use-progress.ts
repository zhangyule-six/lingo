"use server"

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth, currentUser } from "@clerk/nextjs";
import db from "@/db/drizzle";
import { getCourseById, getUserProgress } from "@/db/queries";
import { userProgress } from "@/db/schema";


export const upsertUserProgress = async (courseId:number) =>{
    const {userId} = await auth();
    const user = await currentUser();
    
    if(!userId || !user){
      throw new Error("Unauthorized");
    }

    const course = await getCourseById(courseId);

    if(!course){
      throw new Error("Course not found");
    }

    
    // if(!course.units.length || !course.units[0].lessons.length){
    //   throw new Error("Course is empty");
    // }

    const existingUserProgress = await getUserProgress();
    
    if(existingUserProgress){
      await db.update(userProgress).set({
        activeCourseId:courseId,
        userName:user.firstName || "User",
        userImageSrc: user.imageUrl || "/mascot.svg"
      })

    //一旦运行此处，方法将会break，整个结束
      revalidatePath('/courses');
      revalidatePath('/learn');
      redirect("/learn")
    }

    await db.insert(userProgress).values({
      userId,
      activeCourseId:courseId,
      userName:user.firstName || "User",
      userImageSrc: user.imageUrl || "/mascot.svg"
    })

    revalidatePath('/courses');
    revalidatePath('/learn');
    redirect("/learn")

}

