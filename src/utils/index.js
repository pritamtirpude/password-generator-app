export const generateRandomPassword = (
  passwordLength,
  uppercaseBool,
  lowercaseBool,
  numbersBool,
  symbolsBool
) => {
  let generatedPasswordString = "";
  let characters = "";

  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_-+=[]{}|;:,.<>?";

  if (uppercaseBool) {
    characters += uppercaseLetters;
  }

  if (lowercaseBool) {
    characters += lowercaseLetters;
  }
  if (numbersBool) {
    characters += numbers;
  }
  if (symbolsBool) {
    characters += symbols;
  }

  if (characters.length > 0) {
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPasswordString += characters[randomIndex];
    }
  } else {
    return;
  }

  return generatedPasswordString;
};

export const validatePasswordStrength = (passwordLength) => {
  if (passwordLength >= 0 && passwordLength <= 5) {
    return "too weak!";
  }

  if (passwordLength > 5 && passwordLength <= 10) {
    return "weak";
  }

  if (passwordLength > 10 && passwordLength <= 15) {
    return "medium";
  }

  if (passwordLength > 15 && passwordLength <= 20) {
    return "strong";
  }
};

export const copyToClipboard = async (password) => {
  try {
    if (window.isSecureContext && navigator.clipboard) {
      await navigator.clipboard.writeText(password);
    }
  } catch (error) {
    alert("Browser does not support clipboard");
  }
};
