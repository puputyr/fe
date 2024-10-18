function Welcome() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-300 to-purple-500 flex items-center justify-between px-20">
        {/* Left Section - Welcome Text */}
        <div className="text-white space-y-6 max-w-md">
          <h1 className="text-5xl font-bold">Selamat datang di Aisee</h1>
          <p className="text-lg">
            Kami percaya pada kekuatan teknologi untuk menyelamatkan nyawa. Sistem canggih kami menggabungkan CCTV, AI, dan pemantauan waktu nyata untuk mengidentifikasi dan mencegah upaya bunuh diri, serta memberikan intervensi segera saat dibutuhkan.
          </p>
        </div>
      </div>
    );
  }
  
  export default Welcome;
  