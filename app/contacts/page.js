import {ContactButton} from "@/components/contact-button"
import ContactSearch from "@/components/contact-search"
import ContactTable from "@/components/contact-table"

const Contact = ({searchParams}) => {

    const query = searchParams.query || ""
    const currentPage = Number(searchParams.page) || 1

    return (
        <div className="max-w-screen-md mx-auto mt-5">
            <div className="flex items-center justify-center gap-1 mb-5">
                <ContactSearch />
                <ContactButton />
            </div>
            <ContactTable query={query} currentPage={currentPage} />
        </div>
    )
}

export default Contact