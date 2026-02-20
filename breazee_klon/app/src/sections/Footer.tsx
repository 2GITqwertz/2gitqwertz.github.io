import { Instagram } from 'lucide-react';
import { footerConfig } from '@/config';

export default function Footer() {
  return (
    <footer id="support" className="py-12 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {footerConfig.legalLinks.map((link, index) => (
            <span key={link.label} className="flex items-center">
              <a
                href={link.href}
                className="text-sm text-[#2a7a7a] hover:text-[#1f5f5f] transition-colors"
              >
                {link.label}
              </a>
              {index < footerConfig.legalLinks.length - 1 && (
                <span className="mx-2 text-gray-400">·</span>
              )}
            </span>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500 mb-6">
          {footerConfig.copyright}
        </p>

        {/* Social Links */}
        <div className="flex justify-center">
          <a
            href={footerConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
