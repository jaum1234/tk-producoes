const numberReducer = (value) => {
    if (value > 1000) {
        value /= 1000
    } 

    return Math.floor(value);
}

export default numberReducer;