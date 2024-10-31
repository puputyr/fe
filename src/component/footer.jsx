const Footer = () => {
  return (
    <footer
      id="footer"
      className="text-white py-40 bg-cover bg-center"
      style={{
        backgroundImage: "url('/footer.png')", // Ensure this path is correct
        backgroundSize: "cover", // Keeps the background image covering the footer
        backgroundPosition: "center", // Centers the background image
      }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        {/* Partner Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-left mt-40">
            Partner
          </h3>{" "}
          {/* Adjust the margin as needed */}
          <ul className="space-y-2 text-left">
            <li>Dinas Kesehatan</li>
            <li>Psikolog</li>
            <li>Petugas Keamanan</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-1 text-left mt-40 ">
            Hubungi Kami
          </h3>
          <p className="text-left">Micro Centre</p>
          <p className="text-left">Alleysi Block X No. 12</p>
          <p className="text-left">Jakarta Selatan, Indonesia</p>
          <p className="text-left">Tel: +21 2020 5555</p>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 mt-40">
            Pengaduan dan Dukungan
          </h3>
          <p className="mb-4">Submit your email for new updates:</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 flex-grow"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white font-bold rounded-r-lg"
              aria-label="Submit email"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-black mt-5 pt-4 text-center text-black">
        2024 Copyright Micro by Aisee. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
