const forMobile = (styles: any) => {

    let formatedStyles = ``;

    for (const key in styles) {
        formatedStyles += `${key}: ${styles[key]};
        `
    }

    return `@media screen and (max-width: 480px) {
        ${formatedStyles}
    }`
} 


export {
    forMobile
}