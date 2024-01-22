const usePassValidator = () => {
  // Function to validate a password
  const validatePassword = (password: string) => {
    // Minimum length of the password
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    // Check if the password meets all criteria
    const isValid =
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasDigit &&
      hasSpecialChar;

    return isValid;
  };

  return {
    validatePassword,
  };
};

export default usePassValidator;
