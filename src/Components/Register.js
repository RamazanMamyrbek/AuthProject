import Lorby from "../Assets/illustration.png";
import { Form, useFormik } from "formik";
import { newSchema } from "../Schemas/Schemas";
import { Icon } from "react-icons-kit";
import { basic_eye } from "react-icons-kit/linea/basic_eye";
import { basic_eye_closed } from "react-icons-kit/linea/basic_eye_closed";
import { circle_delete } from 'react-icons-kit/ikons/circle_delete'
import { angleLeft } from 'react-icons-kit/fa/angleLeft'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import 'tailwindcss/tailwind.css';

const Regist = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const onSubmit = () => {
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted");
      setFormSubmitted(true);
    } else {
      console.log("Form has errors");
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        userName: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: newSchema,
      onSubmit,
    });

  console.log(errors);
  const handleBackButtonClick = () => {
    console.log('Назад');
  };

  return (
    <div >
      {formSubmitted ? (
        <div>
          <div>
            <div className="flex justify-center" style={{ zIndex: 1 }}>
              <button className="w-[96px] h-[52px] z-10" type="button" onClick={handleBackButtonClick}><Icon icon={angleLeft} size={20} />Назад</button>
            </div>
            <div className="h-[100vh]  flex justify-around items-center">
              <div className="w-[380px] h-[500px]  flex flex-col justify-between">
                <img className="relative top-[-20px]" src={Lorby} alt="" />
                <h1 className="text-5xl font-semibold leading-[71.28px] text-center">Lorby</h1>
                <h2 className="text-[28px] font-normal leading-10 text-center">
                  Твой личный репетитор
                </h2>

              </div>
              <div className="w-[343px] h-[600px] flex flex-col justify-around items-center">
                <div className="w-[300px] text-center">
                  <h2 className="text-xl font-semibold text-[19px] leading-[25px]">
                    Выслали письмо со ссылкой для завершения регистрации на {values.email}
                  </h2>
                  <p className="mt-12 text-[15px]">
                    Если письмо не пришло, не спеши ждать совиную почту - лучше проверь ящик “Спам”
                  </p>
                  <p className="mt-4 text-center">(´｡• ω •｡`)</p>

                  <div>
                    <p onClick={openModal} className="mt-8 cursor-pointer">Письмо не пришло</p>
                    {isOpen && (
                      <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg z-50">
                        <h2 className="text-xl font-semibold mb-4">Мы выслали еще одно письмо на указанную тобой почту  {values.email}</h2>
                        <p>Не забудь проверить
                          ящик “Спам”!</p>
                        <button onClick={closeModal} className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-900">Понятно!</button>
                      </div>
                    )}
                    {isOpen && <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-40" onClick={closeModal}></div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-center" style={{ zIndex: 1 }}>
            <button className="w-[96px] h-[52px] z-10" type="button" onClick={handleBackButtonClick}><Icon icon={angleLeft} size={20} />Назад</button>
          </div>
          <div className="h-[100vh]  flex justify-around items-center">
            <div className="w-[380px] h-[500px]  flex flex-col justify-between">
              <img src={Lorby} alt="" />
              <div>
                <h1 className="text-5xl font-semibold leading-[71.28px] text-center">Lorby</h1>
                <h2 className="text-[28px] font-normal leading-10 text-center">
                  Твой личный репетитор
                </h2>
              </div>
            </div>

            <div className="w-[343px] h-[600px] flex flex-col justify-between">
              <div className="mt-16 w-[300px] text-center" >
                <h1 className="text-5xl font-semibold text-[32px] leading-[47px] text-center">
                  Создать аккаунт Lorby
                </h1>
              </div>

              <form onSubmit={handleSubmit} className="h-[454px] flex flex-col justify-between">
                <div className="h-[336px] flex flex-col justify-between text-start">
                  <input
                    className={`bg-[#F8F8F8] py-[13px] rounded-xl px-4 ${errors.email && touched.email && values.email ? "bg-red-200" : "bg-[#F8F8F8]"} `}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    name="email"
                    placeholder="Введи адрес почты"
                  />
                  {errors.email && touched.email && (<p className="text-red-500">{errors.email}</p>)}
                  <input
                    className={`bg-[#F8F8F8] gap-[6px] py-[13px] rounded-xl px-4 ${errors.userName && touched.userName && values.userName ? "bg-red-200" : "bg-[#F8F8F8]"} `}
                    value={values.userName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    name="userName"
                    placeholder="Придумай логин"
                  />
                  {errors.userName && touched.userName && (<p className="text-red-500">{errors.userName}</p>)}
                  <div className="h-[128px] flex flex-col justify-around">
                    <div className="relative">
                      <input
                        className={`w-full bg-[#F8F8F8] py-[13px] rounded-xl px-4 ${errors.password && touched.password && values.password ? "bg-red-200" : "bg-[#F8F8F8]"} `}
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Создай пароль"
                      />
                      {values.password && (
                        <span
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                        >
                          <Icon icon={showPassword ? basic_eye : basic_eye_closed} size={18} />
                        </span>
                      )}
                    </div>
                    <ul className="text-start list-disc mx-6 text-[#767676] font-medium text-xs">
                      {/* От 8 до 15 символов */}
                      <li className={`${!values.password ? "text-gray-500" : values.password.length >= 8 && values.password.length <= 15 ? "text-green-500" : "text-red-500"}`}>
                        От 8 до 15 символов {values.password && values.password.length >= 8 && values.password.length <= 15 ? "✅" : "❌"}
                      </li>
                      {/* Строчные и прописные буквы */}
                      <li className={`${!values.password ? "text-gray-500" : /[a-z]/.test(values.password) && /[A-Z]/.test(values.password) ? "text-green-500" : "text-red-500"}`}>
                        Строчные и прописные буквы {values.password && /[a-z]/.test(values.password) && /[A-Z]/.test(values.password) ? "✅" : "❌"}
                      </li>
                      {/* Минимум 1 цифра */}
                      <li className={`${!values.password ? "text-gray-500" : /[0-9]/.test(values.password) ? "text-green-500" : "text-red-500"}`}>
                        Минимум 1 цифра {values.password && /[0-9]/.test(values.password) ? "✅" : "❌"}
                      </li>
                      {/* Минимум 1 спецсимвол */}
                      <li className={`${!values.password ? "text-gray-500" : /[!@#$%^&*()_+=[\]{};':"\\|,.<>/?]/.test(values.password) ? "text-green-500" : "text-red-500"}`}>
                        Минимум 1 спецсимвол (!, #, $...) {values.password && /[!@#$%^&*()_+=[\]{};':"\\|,.<>/?]/.test(values.password) ? "✅" : "❌"}
                      </li>
                    </ul>
                  </div>
                  <div className="relative">
                    <input
                      className={`w-full bg-[#F8F8F8] py-[13px] rounded-xl px-4 pr-10 ${errors.confirmPassword && touched.confirmPassword && values.confirmPassword ? "bg-red-200" : "bg-[#F8F8F8]"} `}
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Повтори пароль"
                    />
                    {values.confirmPassword && (
                      <span
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                      >
                        <Icon icon={showConfirmPassword ? basic_eye : basic_eye_closed} size={18} />
                      </span>
                    )}
                  </div>
                  {errors.confirmPassword && touched.confirmPassword && (<p className="text-red-500">{errors.confirmPassword}</p>)}
                </div>
                <div className="flex justify-center  mt-8">
                  <button type="submit" className="bg-[#292929] text-white py-[13px] rounded-xl px-6">Далее</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Regist;








// import React, { useState } from 'react';
// import Lorby from '../Assets/illustration.png'
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { Icon } from "react-icons-kit";
// import { angleLeft } from 'react-icons-kit/fa/angleLeft'
// import { basic_eye } from "react-icons-kit/linea/basic_eye";
// import { basic_eye_closed } from "react-icons-kit/linea/basic_eye_closed";
// import * as Yup from 'yup';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'tailwindcss/tailwind.css';

// const RegisterForm = () => {

//   const [showPassword, setShowPassword] = useState(false);

//   const initialValues = {
//     email: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//     showPassword: false,
//   };

//   const validationSchema = Yup.object().shape({
//     email: Yup
//       .string()
//       .email('Invalid email')
//       .required('Email is required'),
//     username: Yup.string().required('Username is required'),
//     password: Yup.string()
//       .required('Password is required')
//       .matches(
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/,
//         'Password must:\n' +
//         '• Be 8 to 15 characters long.\n' +
//         '• Contain both lowercase and uppercase letters.\n' +
//         '• Include at least one digit.\n' +
//         '• Have at least one special character (!, ", #, $...).'
//       ),
//     confirmPassword: Yup.string()
//       .required('Confirm Password is required')
//       .oneOf([Yup.ref('password'), null], 'Passwords must match'),
//   });

//   const handleSubmit = (values, { setSubmitting, resetForm }) => {

//     setTimeout(() => {
//       console.log('Submitted:', values);
//       toast.success('Registration successful!');
//       resetForm();
//       setSubmitting(false);
//     }, 1000);
//   };

//   const handleBackButtonClick = () => {
//     console.log('Назад');
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <div className="flex justify-center" >
//             <button className="w-[96px] h-[52px]" type="button" onClick={handleBackButtonClick}><Icon icon={angleLeft} size={20} />Назад
//             </button>
//           </div>

//           <div className="flex justify-around flex-row">

//             <div>
//               <div className="w-[400px] h-[450px]  flex flex-col justify-around ">
//                 <img src={Lorby} className="w-[380px] h-[410px]" alt="" />
//                 <div className="text-center">
//                   <h1 className="text-5xl font-semibold leading-[71.28px]">Lorby</h1>
//                   <h2 className="text-[28px] font-normal leading-10">
//                     Твой личный репетитор
//                   </h2>
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-center flex-col" >
//               <div className='w-[300px]' >
//                 <h3 className=' w-[250px] text-5xl text-center'>Создать аккаунт Lorby</h3>
//                 <div className="space-y-4">
//                   <div>
//                     <Field type="email" name="email" placeholder="Введи адрес почты" className="w-[250px] bg-gray-200 p-3 rounded-md" />
//                     <ErrorMessage name="email" component="div" className="error" />
//                   </div>
//                   <div>
//                     <Field type="text" name="username" placeholder="Придумай логин" className="w-[250px] bg-gray-200 p-3 rounded-md" />
//                     <ErrorMessage name="username" component="div" className="error" />
//                   </div>
//                   <div>
//                     <div className="relative">
//                       <Field
//                         type={showPassword ? "text" : "password"}
//                         name="password"
//                         placeholder="Создай пароль"
//                         className="w-[250px] pr-10 bg-gray-200 p-3 rounded-md"
//                       />
//                       <span
//                         onClick={() => setShowPassword((prev) => !prev)}
//                         className="absolute top-1/2 right-40 transform -translate-y-1/2 cursor-pointer"
//                       >
//                         <Icon
//                           className='w-[20px] h-[20px] bg-grey-500 rounded-full'
//                           icon={showPassword ? basic_eye : basic_eye_closed}
//                           size={18}
//                         />
//                       </span>
//                     </div>
//                     <ErrorMessage name="password" component="div" className="error w-[250px]" />
//                   </div>
//                   <div>
//                     <Field type="password" name="confirmPassword" placeholder="Повтори пароль" className="w-[250px] bg-gray-200 p-3 rounded-md" />
//                     <ErrorMessage name="confirmPassword" component="div" className="error" />
//                   </div>
//                 </div>
//                 <button type="submit" disabled={isSubmitting} className=" w-[250px] bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
//                   {isSubmitting ? 'Submitting...' : 'Далее'}
//                 </button>
//               </div>
//             </div>
//           </div>


//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default RegisterForm;

