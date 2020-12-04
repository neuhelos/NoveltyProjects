export const validation = (inputValue, validationType) => {

  let formIsValid = true;
  let error = "";
  let progress = 1

  if (!inputValue) {
      formIsValid = false;
      error = "Field Must Be Completed"
      progress = 0
      return { formIsValid, error, progress }
  }

  if (validationType === "email") {
    if (typeof inputValue !== "undefined") {
      let emailValidator = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!emailValidator.test(inputValue)) {
        formIsValid = false;
        error = "Please enter a valid email";
        progress = 0
      }
    }
  }

  return { formIsValid, error, progress };
};
