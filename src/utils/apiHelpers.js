export const parseApiErrors = (error) => {
  return error.response.body.violations.reduce((parsedErrors, violation) => {
    parsedErrors[violation["propertyPath"]] = "ce champ ne doit pas être vide";
    return parsedErrors;
  }, {});
};
