import { ContactCreateForm } from "@/components/contact-form"

const Create = () => {
    return (
        <div className="max-w-md mx-auto mt-5">
            <h1 className="text-2xl text-center mb-3">Add New Contact</h1>

            <ContactCreateForm />
        </div>
    )
}

export default Create