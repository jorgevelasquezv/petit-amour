import WithPrivateRoute from "@components/WithPrivateRoute";
import { useProfile } from "@hooks/useProfile";
import Image from "next/image";

const Profile = () => {
  const {
    dataRegister,
    handleChange,
    confirmPassword,
    handleChangeConfirmPassword,
    handleSave,
    validEmail,
    activateSave,
  } = useProfile();

  return (
    // <div className="flex items-center h-screen w-full justify-center">
    //   <div className="max-w-md">
    //     <div className="bg-white shadow-xl rounded-lg py-3">
    //       <div className="photo-wrapper p-2">
    //         <Image
    //           className="w-32 h-32 rounded-full mx-auto"
    //           src={"https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"}
    //                       alt="John Doe"
    //                       width={128}
    //                       height={128}
    //         />
    //       </div>
    //       <div className="p-2">
    //         <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
    //           Joh Doe
    //         </h3>
    //         <div className="text-center text-gray-400 text-xs font-semibold">
    //           <p>Web Developer</p>
    //         </div>
    //         <table className="text-xs my-3">
    //           <tbody>
    //             <tr>
    //               <td className="px-2 py-2 text-gray-500 font-semibold">
    //                 Address
    //               </td>
    //               <td className="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
    //             </tr>
    //             <tr>
    //               <td className="px-2 py-2 text-gray-500 font-semibold">
    //                 Phone
    //               </td>
    //               <td className="px-2 py-2">+977 9955221114</td>
    //             </tr>
    //             <tr>
    //               <td className="px-2 py-2 text-gray-500 font-semibold">
    //                 Email
    //               </td>
    //               <td className="px-2 py-2">john@exmaple.com</td>
    //             </tr>
    //           </tbody>
    //         </table>
    //         <div className="text-center my-3">
    //           <a
    //             className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
    //             href="#"
    //           >
    //             View Profile
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Nombres
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={dataRegister.name}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
          {dataRegister.name.length < 2 && dataRegister.name.length !== 0 && (
            <span className="text-red-500 text-xs italic">
              Debe contener mas de dos caracteres.
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Apellidos
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={dataRegister.lastName}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Doe"
            required
          />
          {dataRegister.lastName.length < 2 &&
            dataRegister.lastName.length !== 0 && (
              <span className="text-red-500 text-xs italic">
                Debe contener mas de dos caracteres.
              </span>
            )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={dataRegister.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
          {!(
            dataRegister.email.length === 0 ||
            validEmail.test(dataRegister.email)
          ) && (
            <span className="text-red-500 text-xs italic">
              No es un formato de correo valido.
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={dataRegister.phone}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
          {dataRegister.phone.length < 8 && dataRegister.phone.length !== 0 && (
            <span className="text-red-500 text-xs italic">
              No es un numero de telefono valido.
            </span>
          )}
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={dataRegister.password}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
        {dataRegister.password.length < 8 &&
          dataRegister.password.length > 0 && (
            <span className="text-red-500 text-xs italic">
              Debe contener mas de 8 caracteres
            </span>
          )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="confirmPassword"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Confirmar Contraseña
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
          required
        />
        {confirmPassword.length > 0 &&
          dataRegister.password !== confirmPassword && (
            <span className="text-red-500 text-xs italic">
              Las contraseñas deben ser iguales.
            </span>
          )}
      </div>
      <button
        className={
          activateSave
            ? "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            : "text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        }
        onClick={handleSave}
        disabled={!activateSave}
      >
        Guardar
      </button>
    </div>
  );
};

export default Profile;

Profile.Auth = WithPrivateRoute;
