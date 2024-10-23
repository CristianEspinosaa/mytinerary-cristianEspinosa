import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8 px-4">

        {/* Home Section */}
        <div className="w-full md:w-1/3">
          <h5 className="font-bold text-lg mb-4">Home</h5>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Cities
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="w-full md:w-1/3">
          <h5 className="font-bold text-lg mb-4">Contact Us</h5>
          <p className="mb-2">123 Street, City</p>
          <p className="mb-2">
            Email:{" "}
            <a href="mailto:contact@mytinerary.com" className="hover:underline">
              contact@mytinerary.com
            </a>
          </p>
          <p>Phone: (123) 456-7890</p>
        </div>

        {/* Follow Us Section */}
        <div className="w-full md:w-1/3">
          <h5 className="font-bold text-lg mb-4">Follow Us</h5>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:underline flex items-center">
                <i className="fab fa-facebook mr-2"></i> Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline flex items-center">
                <i className="fab fa-instagram mr-2"></i> Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline flex items-center">
                <i className="fab fa-twitter mr-2"></i> Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
