// import { auth } from '@/lib/auth'
'use server'
import { revalidatePath } from "next/cache";
import { postTask } from "./page";
import { redirect } from "next/navigation";


export const createData = async (formData) => {
    // 'use server'


    const newTask = Object.fromEntries(formData.entries());

    console.log(newTask);

    // const name = formData.get('name')
    // // const content = formData.get('content')

    // console.log("name data", formData);
    const res = await postTask(newTask)

    if (res.success) {
        revalidatePath('/task')
    }
    return res;
}

export const extraTask = async (formData) => {
    

    const newTask = Object.fromEntries(formData.entries());

    console.log("hello bangladesh", newTask);

    const res = await postTask(newTask);

    if (res.success) {
        revalidatePath('/task');
        redirect('/task');
    }

    return res;
};



