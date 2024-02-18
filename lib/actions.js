"use server";

import {z} from "zod"
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ContactSchema = z.object({
    name: z.string().min(6),
    phone: z.string().min(11),
});

export const saveContact = async (prevState, formData) => {
    const validateFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()))
    if(!validateFields.success){
        return {
            Error: validateFields.error.flatten().fieldErrors
        }
    }

    
    try{
        await prisma.contact.create({
            data:{
                name: validateFields.data.name,
                phone: validateFields.data.phone,
            }
        })
    } catch(error) {
        return {message: "Failed to craete contact"}
    }

    revalidatePath("/contacts")
    redirect("/contacts")
}

export const updateContact = async (id, prevState, formData) => {
    const validateFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()))
    if(!validateFields.success){
        return {
            Error: validateFields.error.flatten().fieldErrors
        }
    }
    
    try{
        await prisma.contact.update({
            data:{
                name: validateFields.data.name,
                phone: validateFields.data.phone,
            },
            where: {id}
        })
    } catch(error) {
        return {message: "Failed to update contact"}
    }

    revalidatePath("/contacts")
    redirect("/contacts")
}

export const deleteContact = async (id) => {
    
    try{
        await prisma.contact.delete({
            where: {id}
        })
    } catch(error) {
        return {message: "Failed to delete contact"}
    }

    revalidatePath("/contacts")
    redirect("/contacts")
}