"use client"

import Link from 'next/link'
import { IoAddSharp, IoPencil, IoTrash } from 'react-icons/io5'
import {useFormStatus} from 'react-dom';
import { deleteContact } from '@/lib/actions';

export const ContactButton = () => {
    return (
        <Link href="/contacts/create" className="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] gap-2 rounded-sm text-sm">
            <IoAddSharp size={20} />
            Create
        </Link>
    )
}

export const ContactButtonEdit = ({id}) => {
    return (
        <Link href={`/contacts/edit/${id}`} className="hover:bg-gray-100 p-3 rounded-sm border">
            <IoPencil size={20} />
        </Link>
    )
}

export const ContactButtonDelete = ({id}) => {
    const deleteContactWithID = deleteContact.bind(null, id)

    return (
        <form action={deleteContactWithID}>
            <button 
                type="submit"
                className="hover:bg-gray-100 p-3 rounded-sm border">
                <IoTrash size={20} />
            </button>
        </form>
    )
}

export const ContactButtonSave = () => {
    const {pending} = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className={"text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center" + (pending ? " opacity-50 cursor-progress" : "")}
        >
            <span>{ pending == true ? 'Saving....' : 'Save' }</span>
        </button>
    )
}