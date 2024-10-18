function Register() {
  return (
    <div className="bg-purple-600 p-8 rounded-xl shadow-lg w-1/3 space-y-4">
      <input
        type="text"
        placeholder="User name"
        className="w-full p-3 rounded-lg bg-beige-200 placeholder-gray-700"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 rounded-lg bg-beige-200 placeholder-gray-700"
      />
      <button className="w-full bg-purple-800 text-white p-3 rounded-lg font-bold shadow-md">
        Register
      </button>
      <p className="text-center text-white">
        <a href="#" className="underline">
          Continue as Guest
        </a>
      </p>
    </div>
  );
}

export default Register;
