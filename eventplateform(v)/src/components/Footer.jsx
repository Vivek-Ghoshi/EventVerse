const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-white font-bold mb-4">Company Name</h3>
              <p className="text-sm">
                Making the world a better place through innovative solutions.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
                <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
  
            {/* Social Media */}
            <div>
              <h3 className="text-white font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://twitter.com" className="hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://facebook.com" className="hover:text-white">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://linkedin.com" className="hover:text-white">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
  
            {/* Newsletter */}
            <div>
              <h3 className="text-white font-bold mb-4">Newsletter</h3>
              <form className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded bg-gray-700 text-white"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
            <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;