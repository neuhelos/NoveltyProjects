export const validation = (inputValue, validationType) => {

    let formIsValid = true;
    let error = "";

    if (!inputValue) {
        formIsValid = false;
        error = "Field Must Be Completed"
        return { formIsValid, error}
    }

    if(validationType === "alphanumeric"){

        if (typeof inputValue !== "undefined") {
            if (!inputValue.match(/^.{3,}[a-zA-Z0-9]*$/)) {
            formIsValid = false;
            error = "Please enter at least 3 or more alphanumeric characters."
            }
        }
    }

    return { formIsValid, error};
};