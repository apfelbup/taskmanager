

function formatDate(value?:string) {
    const options:{[key:string]:string} = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timezone: 'UTC'
    };

    const createdDate = new Date().toLocaleString("ru", options);

    if(value){
        const deadline = new Date(value+"T00:00").toLocaleString("ru", options);

        return {createdDate, deadline};
    }

    return {createdDate};
}

export default formatDate;