export const getAge = (dateString) => {
  const today = new Date();
  const birthDate = new Date(dateString);
  const m = today.getMonth() - birthDate.getMonth();
  let age = today.getFullYear() - birthDate.getFullYear();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

export const convertToSnakeCase = (str) => {
  return str.replace(/-/g, "_");
};

export const convertToTitleCase = (str) => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
