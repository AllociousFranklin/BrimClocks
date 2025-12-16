import { Phone, Mail } from 'lucide-react';

export function Footer() {
  const phoneNumber = '+91 9445887243';
  const email = 'brimdisplay@gmail.com';

  return (
    <footer className="bg-[#292929] border-t border-[#B6B6B4]/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 
              className="text-2xl text-[#B6B6B4] mb-3"
              style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}
            >
              Brim Clocks
            </h3>
            <p className="text-[#8A8A8A] mb-4">
              Your trusted partner for premium LED clock solutions
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2 text-[#F5F5F5] hover:text-[#B6B6B4] transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>{phoneNumber}</span>
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-[#F5F5F5] hover:text-[#B6B6B4] transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>{email}</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#B6B6B4]/20 text-center">
          <p className="text-[#8A8A8A]">
            © 2025 Brim Clocks. All rights reserved. | Made in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
