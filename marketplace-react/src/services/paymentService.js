export const cardDefaults = {
  name: "",
  card_number: "",
  valid_thru: "",
  cvv: "",
};

const checkNumber = (number) => {
  var sum = 0;
  for (var i = 0; i < number.length; i++) {
    var intValue = parseInt(number.substr(i, 1));
    if (i % 2 == 0) {
      intValue *= 2;
      if (intValue > 9) {
        intValue = 1 + (intValue % 10);
      }
    }
    sum += intValue;
  }
  return sum % 10 == 0;
};

export const validateCardFields = (name, value) => {
  switch (name) {
    case "card_number":
      if (value === "") return "Card number cannot be empty";
      if (!value.match(/^[0-9]{16}$/) || !checkNumber(value))
        return "Please enter a valid card number";
      return true;

    case "valid_thru":
      if (value === "") return "Please enter expiry date";
      if (!value.match(/^(0[1-9]|1[0-2])\/?(2[2-9]|3[0-9])$/))
        return "Invalid expiry date";
      return true;

    case "cvv":
      if (value === "") return "Please enter cvv";
      if (!value.match(/^[0-9]{3,4}$/)) return "Invalid cvv";
      return true;

    default:
      return true;
  }
};
