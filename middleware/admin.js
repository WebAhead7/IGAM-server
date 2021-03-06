const { parametersError } = require("./utils/functions");
const deleteMe = () => {
  console.log("Errors");
};
const checkSignUpParams = (req, res, next) => {
  console.log("checkSignUp method...", req.body);
  const {
    name,
    email,
    password,
    phone,
    donation_budget,
    available_packages,
  } = req.body;
  if (
    name &&
    email &&
    password &&
    phone &&
    donation_budget &&
    available_packages
  ) {
    return next();
  }

  next(parametersError());
};

module.exports = { checkSignUpParams };
