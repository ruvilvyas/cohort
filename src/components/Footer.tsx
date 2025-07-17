export default function Footer() {
  return (
<footer className="bg-[#f4ecfa] text-[#2d1b4e] py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-[#6b3fa0] mb-2">Sansole Education</h2>
          <p className="text-sm">
            Empowering commerce students with crystal clear concepts, guided by experienced educators. Learn. Grow. Excel.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-[#6b3fa0]">Home</a></li>
            <li><a href="/tutorials" className="hover:text-[#6b3fa0]">Tutorials</a></li>
            <li><a href="/about" className="hover:text-[#6b3fa0]">About Us</a></li>
            <li><a href="/contact" className="hover:text-[#6b3fa0]">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
          <p className="text-sm">📍 Ahmedabad, Gujarat</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm mb-3">✉️ info@glaemira.in</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-[#6b3fa0]" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.6.5.3.9.8 1.2 1.2.3.4.5 1.1.6 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.3-.3.5-.8.9-1.2 1.2-.4.3-1.1.5-2.3.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.5-1.1-.6-2.3-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.9.6-2.3.3-.5.8-.9 1.2-1.2.4-.3 1.1-.5 2.3-.6C8.4 2.2 8.8 2.2 12 2.2M12 0C8.7 0 8.3 0 7 .1 5.7.2 4.6.5 3.7 1c-.9.5-1.6 1.2-2.1 2.1-.5.9-.8 2-1 3.3C.1 8.3 0 8.7 0 12s.1 3.7.1 5c.2 1.3.5 2.4 1 3.3.5.9 1.2 1.6 2.1 2.1.9.5 2 1 3.3 1.2C8.3 23.9 8.7 24 12 24s3.7-.1 5-.1c1.3-.2 2.4-.5 3.3-1 1-.5 1.6-1.2 2.1-2.1.5-.9.8-2 1-3.3.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.2-1.3-.5-2.4-1-3.3-.5-.9-1.2-1.6-2.1-2.1-.9-.5-2-1-3.3-1.2C15.7.1 15.3 0 12 0z"/><path d="M12 5.8A6.2 6.2 0 1 0 18.2 12 6.2 6.2 0 0 0 12 5.8zm0 10.3A4.1 4.1 0 1 1 16.1 12 4.1 4.1 0 0 1 12 16.1zM18.4 4.6a1.44 1.44 0 1 0 1.44 1.44A1.44 1.44 0 0 0 18.4 4.6z"/></svg>
            </a>
            <a href="#" className="hover:text-[#6b3fa0]" aria-label="WhatsApp">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32"><path d="M16 0C7.2 0 0 7.1 0 15.9c0 2.8.7 5.4 2 7.8L0 32l8.6-2.2c2.3 1.2 4.9 1.8 7.4 1.8 8.8 0 16-7.1 16-15.9S24.8 0 16 0zm0 29.1c-2.3 0-4.6-.6-6.7-1.7l-.5-.3-5.1 1.3 1.3-5-.3-.5c-1.3-2-1.9-4.2-1.9-6.5C2.8 8.6 8.7 2.9 16 2.9s13.2 5.7 13.2 12.7S23.3 29.1 16 29.1zm7.2-9.7c-.4-.2-2.6-1.3-3-1.4-.4-.2-.7-.2-1 .2-.3.4-1.1 1.4-1.3 1.6s-.5.3-.9.1c-.4-.2-1.5-.6-2.9-1.8-1.1-1-1.8-2.2-2-2.6-.2-.4 0-.6.2-.8.2-.3.4-.5.6-.8.2-.2.3-.4.4-.6.1-.2.1-.4 0-.6s-.9-2.3-1.2-3.1c-.3-.8-.7-.7-1-.7h-.9c-.3 0-.6.1-.8.4s-1.1 1.1-1.1 2.7 1.1 3.1 1.3 3.3c.2.3 2.1 3.2 5.1 4.4 3 .1 3.2.1 3.7 0 .6-.2 1.9-1.3 2.1-2.5.2-1.1.2-1.1.1-1.2z"/></svg>
            </a>
            {/* Add more if needed */}
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-[#7a5d92]">
        © {new Date().getFullYear()} Sansole Education. All rights reserved.
      </div>
    </footer>
  );
}
