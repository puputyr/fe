import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Contoh sederhana login berhasil jika username dan password tidak kosong
    if (username && password) {
      setIsLoggedIn(true);
      alert('Login berhasil!'); // Menampilkan notifikasi login berhasil
    } else {
      alert('Username atau password tidak boleh kosong.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-cover bg-gradient-to-b from-purple-200 to-purple-900">
  <div className="RegistrasiWeb w-96 h-auto p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg">
    <div className="w-full mb-4">
      <input
        type="text"
        placeholder="User name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full h-20 px-6 py-4 bg-stone-200 rounded-2xl shadow border text-stone-500 text-xl font-normal font-['Inter'] leading-loose"
      />
    </div>
    
    <div className="w-full mb-4">
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full h-20 px-6 py-4 bg-stone-200 rounded-2xl shadow border text-stone-500 text-xl font-normal font-['Inter'] leading-loose"
      />
    </div>

    <div className="w-full mb-2">
      <button 
        onClick={handleLogin} 
        className="w-full px-6 py-4 bg-purple-900 rounded-2xl shadow flex items-center justify-center"
      >
        <span className="text-white text-xl font-semibold font-['Inter'] leading-loose">
          Login
        </span>
      </button>
    </div>

    {isLoggedIn && (
      <div className="text-green-500 text-center mt-4">
        Login berhasil! Selamat datang, {username}.
      </div>
    )}

    <div className="text-center">
      <div className="ContinueAsGuest text-black text-xl font-normal font-['Inter'] underline">
        Continue as Guest
      </div>
    </div>
  </div>
</div>

  );
}

export default Login;
