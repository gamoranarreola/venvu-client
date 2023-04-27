export const environment = {
  inputValidators: {
    required: {
      errorMessage: "Required field.",
    },
    email: {
      errorMessage: "Invalid email address.",
    },
    personName: {
      pattern: "^[a-zA-Z\\-\\s\\']*$",
      errorMessage: "Only letters, hyphen, apostrophe, and space allowed."
    },
    placeName: {
      pattern: "^[a-zA-Z\\-\\s\\'\\.,]*$",
      errorMessage: "Only letters, hyphen, apostrophe, period, comma, and space allowed.",
    },
    orgName: {
      pattern: "^[a-zA-Z0-9\\-\\s\\.\\',_]*$",
      errorMessage: "Only letters, numbers, hyphen, apostrophe, comma, period, and space allowed."
    },
    phone: {
      pattern: "^[0-9\\-\\(\\)\\s]*$",
      errorMessage:
        "Only numbers, hyphens, parentheses, and spaces allowed",
    },
    addressLine: {
      pattern: "^[a-zA-Z0-9\\-'\\s\\.]*$",
      errorMessage: "Only numbers, letters, hyphen, apostrophe, period, hash, and space allowed."
    },
    countryCode: {
      pattern: "^[A-Z]{2,3}$",
      errorMessage: "Only uppercase letters allowed."
    },
    alphaNumHyphen: {
      pattern: "^[a-zA-Z0-9\\-]*$",
      errorMessage: "Only numbers, letters, and hyphens allowed."
    },
    productService: {
      pattern: "^[a-zA-Z0-9\\(\\)\\-\\'\\s]*$",
      errorMessage: "Only numbers, letters, hyphen, space, apostrophe, and parenthesis allowed."
    },
    webURL: {
      pattern: "^((https?):\/\/)?([\\w\\d\\-\\.]*\.)?[\\w\\d\\-]*\.[a-zA-Z]{2,}$",
      errorMessage: "Invalid website URL."
    },
    securePassword: {
      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).{8,}",
      errorMessage: "Password must have at least 8 characters and contain at least 1 lowercase letter, 1 uppercase letters, 1 number, and 1 special character (!@#$%^&*)."
    },
    passwordMismatch: {
      errorMessage: "Passwords must match",
    },
    textInput: {
      pattern: "^[a-zA-Z0-9\\.,\\;\\?\\!'\\-\\s]*$",
      errorMessage:
        "Only letters, numbers, and punctuation allowed.",
    }
  },
  routes: {
    accounts: "api/v1/accounts",
    companyProfiles: "api/v1/company-profiles",
    companyTypes: "api/cv1/ompany-profiles/company-types",
    employeeCountRanges: "api/v1/company-profiles/employee-count-ranges",
    yearlyRevenueRanges: "api/v1/company-profiles/yearly-revenue-ranges",
    countries: "api/v1/company-profiles/countries",
    industries: "api/v1/company-profiles/industries",
    roles: "api/v1/user-management/roles",
    "sign-in": "api/v1/sign-in"
  },
  google: {
    apiKeys: {
      maps: "AIzaSyCKBTpeEFCbRKzRbPkgQ1T15xSULT8yCjU"
    }
  }
};
