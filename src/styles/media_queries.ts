const forMobile = (styles: any) => {

    let formatedStyles = ``;

    for (const property in styles) {
        formatedStyles += `${property}: ${styles[property]};
        `
    }

    return `@media screen and (max-width: 480px) {
        ${formatedStyles}
    }`
} 


export {
    forMobile
}