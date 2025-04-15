
// Input mask and validation utilities

// Format CPF: 000.000.000-00
export const formatCPF = (value: string): string => {
  const numericValue = value.replace(/\D/g, '').slice(0, 11);
  
  if (numericValue.length <= 3) {
    return numericValue;
  } else if (numericValue.length <= 6) {
    return `${numericValue.slice(0, 3)}.${numericValue.slice(3)}`;
  } else if (numericValue.length <= 9) {
    return `${numericValue.slice(0, 3)}.${numericValue.slice(3, 6)}.${numericValue.slice(6)}`;
  } else {
    return `${numericValue.slice(0, 3)}.${numericValue.slice(3, 6)}.${numericValue.slice(6, 9)}-${numericValue.slice(9)}`;
  }
};

// Format phone: (00) 00000-0000
export const formatPhone = (value: string): string => {
  const numericValue = value.replace(/\D/g, '').slice(0, 11);
  
  if (numericValue.length <= 2) {
    return numericValue;
  } else if (numericValue.length <= 7) {
    return `(${numericValue.slice(0, 2)}) ${numericValue.slice(2)}`;
  } else {
    return `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 7)}-${numericValue.slice(7)}`;
  }
};

// Validate email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate name (minimum 2 words, letters only)
export const isValidName = (name: string): boolean => {
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+ [A-Za-zÀ-ÖØ-öø-ÿ ]+$/;
  return nameRegex.test(name);
};

// Validate CPF (just checking if it has 11 digits)
export const isValidCPF = (cpf: string): boolean => {
  const numericCPF = cpf.replace(/\D/g, '');
  return numericCPF.length === 11;
};

// Validate phone (just checking if it has 10-11 digits)
export const isValidPhone = (phone: string): boolean => {
  const numericPhone = phone.replace(/\D/g, '');
  return numericPhone.length >= 10 && numericPhone.length <= 11;
};
