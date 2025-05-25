import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-white via-white to-blue-300 text-gray-700 px-4 py-10 sm:px-6 md:px-16 lg:px-28">
      <div className="max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="mb-10 text-center sm:text-left">
          <img
            src="/logo.jpg"
            alt="NextStore Logo"
            className="h-16 sm:h-20 w-auto mx-auto sm:mx-0 object-contain"
          />
        </div>

        {/* Grid Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10 text-center sm:text-left">
          {/* Applications */}
          <div>
            <h2 className="text-lg font-semibold mb-3">APPLICATIONS</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Apparel</a></li>
              <li><a href="#" className="hover:underline">Automotive</a></li>
              <li><a href="#" className="hover:underline">Filtration</a></li>
              <li><a href="#" className="hover:underline">Customed Nonwoven</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-lg font-semibold mb-3">COMPANY</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Who We Are</a></li>
              <li><a href="#" className="hover:underline">Global Competency</a></li>
              <li><a href="#" className="hover:underline">Innovation</a></li>
              <li><a href="#" className="hover:underline">ESG Impact</a></li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h2 className="text-lg font-semibold mb-3">MORE</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="text-lg font-semibold mb-3">FOLLOW US</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between items-center border-t border-gray-300 pt-6 text-sm text-center sm:text-left">
          <p>© 2024. ALL RIGHTS RESERVED.</p>
          <p>Supreme House, 110, 16th Road, Chembur, Mumbai - 400071.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
