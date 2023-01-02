const forMobile = (styles) => {

    let formatedStyles = ``;

    for (const key in styles) {
        formatedStyles += `${key}: ${styles[key]}\n`
    }

    console.log(formatedStyles)

    return `@media screen and (max-width: 480px) {
        ${formatedStyles}
    }`
} 


export {
    forMobile
}