import { useState } from 'react';

import Logo from '../../assets/logo/motransfer-default-monochrome-white.svg';

function Register() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a la API de MoTransfer para registrar al usuario
    const userData = { name, lastname, email, password };
    try {
      const response = await fetch('http://localhost:3000/users/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if( response.ok ) {
        const user = await response.json();
        console.log('Usuario registrado:', user);
        setName('');
        setLastname('');
        setEmail('');
        setPassword('');
      } else {
        const error = await response.json();
        console.error('Error al registrar usuario:', error);
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', err);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-moblue to-moyellow">
      <div className="py-8">
            <img src={Logo} alt="MoTransfer Logo" style={{ width: 240 }}/>
        </div>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-md font-300 mb-2" htmlFor="name">
            Nombre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-md font-300 mb-2" htmlFor="lastname">
            Apellido
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastname"
            type="text"
            placeholder="Ingresa tu apellido"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>
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
        <div className="mb-6">
          <label className="block text-gray-700 text-md font-300 mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-moblue hover:bg-moyellow text-white font-300 py-4 px-8 rounded"
            type="submit"
          >
            Registrar
          </button>
        </div>
        <div className="flex mt-4 justify-between py-4">
        <a className="inline-block font-300 text-md text-blue-500 hover:text-blue-800 px-8" href="/">
            ¿Ya tienes una cuenta? Iniciar sesión.
        </a>
        <a className="inline-block font-300 text-md text-blue-500 hover:text-blue-800 px-8" href="/lost-password">
            ¿Has perdido tu contraseña?
        </a>
        </div>
      </form>
    </div>
  );
}

export default Register;