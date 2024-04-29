import * as yup from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*.]).{8,15}$/;



export const newSchema = yup.object().shape({
    email: yup
      .string()
      .email("Пожалуйста введи элек. почту")
      .required("Required"),
    userName: yup.string().required("Required"),
    password: yup
      .string()
      .min(4)
      .max(15)
      .matches(passwordRules, 'Пароль должен соответствовать условиям')
      .required("Required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Пароли не совпадают")
      .required("Required"),
  });
  
  
  
// const regexp = [
//     capslatterCheck = /[A-Z]/,
//     numberCheck = /[0-9]/,
//     specialCharCheck = /[!@#$%^&*]/
// ]

// const regex = [
//     passwordRules === (/[0-9]/) ? 'Минимум 1 цифра' : null,
//     passwordRules === (/[a-z]/) || passwordRules === (/[A-Z]/) ? 'Строчные и прописные буквы' : null,
//     passwordRules === (/[!@#$%^&*]/) ? 'Минимум 1 спецсимвол' : null
// ]