export const loginDefaults = {
  username: "",
  password: "",
};

export const validateField = (name, value) => {
  switch (name) {
    case "username":
      if (value === "") return "Username cannot be empty";
      return true;

    case "password":
      if (value === "") return "Password cannot be empty";
      if (value.length < 8) return "Password must have at least 8 characters";
      if (value.length > 15)
        return "Password must not have more than 15 characters";
      return true;

    default:
      return "";
  }
};
