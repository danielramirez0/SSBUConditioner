import { useState } from "react";

const useForm = (callback) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    event.persist();

    // User Registration Validation
    switch (event.target.name) {
      case "setupPassword":
        setErrors((errors) => ({
          ...errors,
          setupPassword:
            event.target.value.length < 5 ? "Password must be at least 5 characters" : null,
        }));
        break;
      case "confirmPassword":
        setErrors((errors) => ({
          ...errors,
          confirmPassword:
            event.target.value !== values.setupPassword ? "Passwords do not match!" : null,
        }));
        break;
      default:
        break;
    }

    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleMultiSelect = (event) => {
    event.persist();

    const alts = [];
    const options = event.target.options;
    for (let i = 0; i < options.length; i++) {
      const character = options[i];
      if (character.selected) {
        alts.push(character.value);
      }
      setValues(() => ({
        ...values,
        altCharacters: alts,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    callback();
  };

  const handleSubmitRefresh = () => {
    callback();
  };

  const clearValues = () => {
    setValues({});
  };
  return {
    errors,
    values,
    handleChange,
    handleSubmitRefresh,
    handleSubmit,
    clearValues,
    handleMultiSelect,
  };
};

export default useForm;
