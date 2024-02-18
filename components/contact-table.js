import { getContacts } from "@/lib/data"
import { formatDate } from "@/lib/utils";
import { ContactButtonDelete, ContactButtonEdit } from "./contact-button";

const ContactTable = async ({query, contactTable}) => {
    const contacts = await getContacts(query, contactTable);

    return (
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50 whitespace-nowrap">
                <tr>
                    <th className="py-3 px-6">#</th>
                    <th className="py-3 px-6">Name</th>
                    <th className="py-3 px-6">Phone Number</th>
                    <th className="py-3 px-6">Created At</th>
                    <th className="py-3 px-6">Actions</th>
                </tr>
            </thead>

            <tbody>
                {contacts.map((contact, index) => (
                    <tr key={'row-'+index} className="bg-white border-b whitespace-nowrap">
                        <td className="py-3 px-6">{index + 1}</td>
                        <td className="py-3 px-6">{contact.name}</td>
                        <td className="py-3 px-6">{contact.phone}</td>
                        <td className="py-3 px-6">{formatDate(contact.createdAt.toString())}</td>
                        <td className="py-3 px-6">
                            <div className="inline-flex gap-1">
                                <ContactButtonEdit id={contact.id} />
                                <ContactButtonDelete id={contact.id} />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ContactTable