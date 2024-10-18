const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-purple-800 to-purple-400 text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Partner Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Partner</h3>
          <ul className="space-y-2">
            <li>Dinas Kesehatan</li>
            <li>Psikolog</li>
            <li>Petugas Keamanan</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
          <p>Micro Centre</p>
          <p>Alleysi Block X No. 12</p>
          <p>Jakarta Selatan, Indonesia</p>
          <p>+21 2020 5555</p>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Pengaduan dan Dukungan</h3>
          <p className="mb-4">Submit your email for new updates</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 flex-grow"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white font-bold rounded-r-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-300 mt-10 pt-4 text-center text-sm">
        2024 Copyright Micro by Aisee. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
