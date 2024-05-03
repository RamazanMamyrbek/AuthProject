import React, { useState } from 'react';
import Lorby from '../Assets/illustration.png';
import { Icon } from "react-icons-kit";
import { basic_eye } from "react-icons-kit/linea/basic_eye";
import { basic_eye_closed } from "react-icons-kit/linea/basic_eye_closed";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { newSchema } from "../Schemas/Schemas";
import { useDispatch } from 'react-redux';
import { fetchAuth } from '../Redux/Slices/AuthSlice'

const Auth = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: newSchema,
    
    // onSubmit: () => {
    //   if (values.userName !== 'validUser' || values.password !== 'validPassword') {
    //     setErrorMessage('Неверное имя пользователя или пароль');
    //   } else {

    //   }
    // }

  });

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));
    if (!data.payload) {
      return alert('Не удалось авторизоваться!');
    }
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    } else {
      alert('Не удалось авторизоваться!');
    }
  };

  return (
    <div className="h-screen border-2 border-black flex justify-around items-center">
      <div className="w-96 h-96 flex flex-col justify-between" style={{ marginTop: '-100px' }}>
        <img src={Lorby} alt="" className="w-280 h-280 mx-auto mb-2" />
        <div className="text-center">
          <h1 className="text-5xl font-semibold leading-12 mb-1">Lorby</h1>
          <h2 className="text-2xl font-normal leading-6 mb-4">
            Твой личный репетитор
          </h2>
        </div>
      </div>
      <div className="w-72 h-96 flex flex-col justify-between">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Вэлком бэк!
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col justify-between">
          <div className="gap-[10px] flex flex-col justify-between mb-6">
            <input
              className="bg-[#F8F8F8] w-[300px] h-[40px] pr-[100px] rounded-xl pl-4"
              value={values.userName}
              onChange={handleChange}
              type="text"
              name="userName"
              placeholder="Введи логин"
              onBlur={handleBlur}
            />

            <div className="relative flex items-center mb-6">
              <input
                className="bg-[#F8F8F8] w-[300px] h-[40px] pr-[100px] rounded-xl pl-4"
                value={values.password}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Введи пароль"
                onBlur={handleBlur}
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[45%] transform -translate-y-1/2 cursor-pointer"
              >
                <Icon
                  icon={showPassword ? basic_eye : basic_eye_closed}
                  size={18}
                />
              </span>
            </div>
          </div>
          <button className="bg-[#292929] text-white py-2 rounded-xl px-4 mt-2">
            Войти
          </button>
        </form>

        <NavLink to={"/registration"}>
          <p className="py-4 text-center">У меня еще нет аккаунта</p>
        </NavLink>
      </div>
      {errorMessage && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-red-500">{errorMessage}</p>
            <button onClick={() => setErrorMessage('')} className="mt-4 bg-[#292929] text-white py-2 rounded-xl px-4">Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;












