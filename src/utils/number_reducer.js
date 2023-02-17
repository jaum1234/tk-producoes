const numberReducer = (number) => {
    if (number >= 1000) {
        return String(Math.trunc(number/1000)) + "K";
    }    

    // if (number > 1000000) {
    //     return String(Math.trunc(number/1000000)) + "M";
    // }

    return number;
    
}

export default numberReducer;