// components/Footer.js

const Footer = () => {
    return (
      <footer className="bg-black text-white">
        <div className="container mx-auto p-8">
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">Abhishek Chaurasia</h2>
              <p>Intern at Octanet.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
              <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/login">Login</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>
              <ul>
                <li><a href="https://twitter.com/">Twitter</a></li>
                <li><a href="https://facebook.com/">Facebook</a></li>
                <li><a href="https://linkedin.com/">LinkedIn</a></li>
                {/* Add more social media links as needed */}
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Abhishek Chaurasia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  