function Login() {
  return (
    <div className="RegistrasiWeb w-96 h-auto mx-auto mt-10 p-6">
    <div className="w-full mb-4">
      <div className="Btn w-full h-20 px-6 py-4 bg-stone-200 rounded-2xl shadow border flex items-center justify-center">
        <div className="Text text-stone-500 text-xl font-normal font-['Inter'] leading-loose">
          User name
        </div>
      </div>
    </div>
    
    <div className="w-full mb-4">
      <div className="Btn w-full h-20 px-6 py-4 bg-stone-200 rounded-2xl shadow border flex items-center justify-center">
        <div className="Text text-stone-500 text-xl font-normal font-['Inter'] leading-loose">
          Password
        </div>
      </div>
    </div>
  
    <div className="w-full mb-6">
      <div className="Btn w-full px-6 py-4 bg-purple-900 rounded-2xl shadow flex items-center justify-center">
        <div className="Text text-white text-xl font-semibold font-['Inter'] leading-loose">
          Login
        </div>
      </div>
    </div>
  
    <div className="text-center">
      <div className="ContinueAsGuess text-stone-200 text-xl font-normal font-['Inter'] underline">
        Continue as Guest
      </div>
    </div>
  </div>
  
  );
}

export default Login;
