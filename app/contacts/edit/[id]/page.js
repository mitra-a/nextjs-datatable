import { ContactEditForm } from "@/components/contact-form"
import { getContactsByID } from "@/lib/data"
import { notFound } from "next/navigation"

const Edit = async ({params}) => {
    const id = params.id
    const contact = await getContactsByID(id)

    if(!contact){
        notFound();
    }

    return (
        <div className="max-w-md mx-auto mt-5">
            <h1 className="text-2xl text-center mb-3">Edit data Contact</h1>

            <ContactEditForm contact={contact} />
        </div>
    )
}

export default Edit