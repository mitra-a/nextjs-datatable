import { prisma } from '@/lib/prisma'

export const getContacts = async (query, contactTable) => {
    try {
        const contacts = await prisma.contact.findMany({
            where:{
                OR:[
                    {
                        name: {
                            contains: query,
                        }
                    },
                    {
                        phone: {
                            contains: query,
                        }
                    },
                ]
            }
        })
        return contacts
    } catch (e) {
        throw new Error("Failed to fetch contact data")
    }
}

export const getContactsByID = async (id) => {
    try {
        const contacts = await prisma.contact.findUnique({
            where: {id}
        })
        return contacts
    } catch (e) {
        throw new Error("Failed to fetch contact data")
    }
}