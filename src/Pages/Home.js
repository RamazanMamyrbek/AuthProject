import React, {useState}from "react";
import Lorby from '../Assets/illustration.png';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center space-y-4">
                <h1 className="text-center text-black font-bold text-4xl mb-4">Добро пожаловать!</h1>
                <p className="text-center mb-4">Lorby - твой личный репетитор</p>
                <div className="w-[300px] h-[300px]">
                    <img src={Lorby} alt="" className="w-128 h-auto mx-auto mb-4" />
                </div>
                <p onClick={openModal} className="mt-8 cursor-pointer">Выйти</p>
            </div>
            <div>
                    
                    {isOpen && (
                      <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg z-50">
                        <h2 className="text-xl font-semibold mb-4">Выйти</h2>
                        <p>Точно выйти?</p>
                        <div className="flex flex-col">
                        <button onClick={closeModal} className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-900">Нет,остаться</button>
                        <button onClick={closeModal} className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-900">Да,точно</button>
                        </div>
                  
                      </div>
                    )}
                    {isOpen && <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-40" onClick={closeModal}></div>}
                  </div>
        </div>
    );
}

export default Home;




