const numberReducer = (number: number) => {
    if (number >= 1000) {
        return String(Math.trunc(number/1000)) + "K";
    }    

    return number;
    
}

export default numberReducer;