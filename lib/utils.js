export const formatDate = (datestring) => {
    const date = new Date(datestring)
    const formatter = new Intl.DateTimeFormat("id-ID", {
        dateStyle: "medium",
        timeStyle: "short"
    })

    return formatter.format(date);
}