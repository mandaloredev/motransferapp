import React, { useState } from 'react';

import Logo from '../../assets/logo/motransfer-default-monochrome-white.svg';

function LostPassword() {

    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos del formulario a la API de MoTransfer para registrar al usuario
      }
  
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-moblue to-moyellow">
        <div className="py-8">
            <img src={Logo} alt="MoTransfer Logo" style={{ width: 240 }}/>
        </div>
    
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        
        <div className="mb-4">
          <label className="block text-gray-700 text-md font-300 mb-2" htmlFor="email">
            Correo electrónico
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-moblue hover:bg-moyellow text-white font-300 py-4 px-8 rounded"
            type="submit"
          >
            Recuperar contraseña
          </button>
        </div>
        <div className="flex mt-4 justify-between py-4">
        <a class="inline-block font-300 text-md text-blue-500 hover:text-blue-800 px-8" href="/register">
            ¿No has creado tu cuenta?
        </a>
        <a class="inline-block font-300 text-md text-blue-500 hover:text-blue-800 px-8" href="/">
            ¿Ya tienes una cuenta? Iniciar sesión.
        </a>
        </div>
      </form>
    </div>
  );
}

export default LostPassword;