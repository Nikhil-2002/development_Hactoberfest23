export const registerDefaults = {
  name: "",
  username: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

export const validateField = (name, value, password) => {
  switch (name) {
    case "name":
      if (value === "") return "Name cannot be empty";
      if (!value.match(/^[^\s]+(\s+[^\s]+)*$/))
        return "Avoid spaces at the start and end";
      if (!value.match(/^[a-zA-Z\s]+$/))
        return "Avoid numbers and special characters";
      return true;

    case "username":
      if (value === "") return "Username cannot be empty";
      if (!value.match(/^.*((?=.*[a-zA-Z]){1}).*$/))
        return "Include atleast one alphabet";
      if (!value.match(/^\S*$/)) return "Should not contain spaces";
      return true;

    case "phone":
      if (value === "") return "Phone number is required";
      if (!value.match(/^[0-9]*$/)) return "Please enter only numbers";
      if (value.length < 10) return "Phone must have 10 digits";
      if (value.length > 10)
        return "Phone must have only 10 digits, remove county code if entered";
      return true;

    case "email":
      if (value === "") return "Email ID is required";
      if (!value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/))
        return "Please enter a valid email";
      return true;

    case "password":
      if (value === "") return "Password is required";
      if (value.length < 8) return "Password must have at least 8 characters";
      if (value.length > 15)
        return "Password must not have more than 15 characters";
      if (
        !value.match(
          /^.*((?=\S+$))((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
        )
      ) {
        return "Include atleast a number, uppercase, lowercase and special character, without spaces";
      }
      return true;

    case "confirmPassword":
      if (value === "") return "Please confirm your password";
      if (value !== password) return "Passwords must match";
      return true;

    default:
      return "";
  }
};
