function Welcome() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-7xl p-8">
        {/* Header Section */}
        <div className="text-2xl font-medium font-['Poppins'] mb-4">
          <span className="text-stone-900">About</span>
          <span className="text-blue-950"> </span>
          <span className="text-stone-500">Aisee</span>
        </div>

        {/* Description Section */}
        <div className="text-slate-500 text-lg font-normal font-['Poppins'] leading-loose">
          Di Aisee Initiative, kami berkomitmen untuk menggunakan teknologi demi
          menyelamatkan nyawa dengan mencegah tindakan bunuh diri di ruang publik.
          Misi kami adalah menciptakan solusi inovatif berbasis kecerdasan buatan
          yang dapat mendeteksi, mencegah, dan merespons tanda-tanda distress dan
          potensi percobaan bunuh diri. Dengan memanfaatkan teknologi pemantauan
          canggih seperti CCTV, kamera termal, dan sensor gerak, kami bertujuan
          untuk memberikan intervensi secara real-time bagi individu yang berisiko.
          <br />
          <br />
          Sistem kami dirancang untuk memantau area berisiko tinggi, seperti
          jembatan dan lokasi publik lainnya, guna mengidentifikasi pola perilaku
          abnormal dan memberikan peringatan kepada pihak berwenang sebelum
          tragedi terjadi. Kami percaya bahwa setiap nyawa berharga, dan melalui
          platform terintegrasi kami—yang mencakup koordinasi tanggap darurat,
          dukungan psikologis, serta keterlibatan masyarakat—kami berupaya
          menciptakan lingkungan yang lebih aman bagi semua orang.
        </div>
      </div>
    </div>
  );
}

export default Welcome;
