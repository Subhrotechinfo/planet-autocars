import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

const footerLinks = [
  { label: 'Inventory', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Privacy Policy', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-red flex items-center justify-center">
                <span className="text-white font-heading font-black text-lg leading-none">PA</span>
              </div>
              <div>
                <div className="font-heading font-black text-2xl leading-none text-white tracking-tight uppercase">Planet</div>
                <div className="font-heading font-bold text-xs text-brand-red tracking-[0.3em] uppercase leading-none">Auto</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Award-winning, family owned used car dealership in Shandong. Lowest prices and the best customer service guaranteed.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-brand-red flex items-center justify-center transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-brand-red flex items-center justify-center transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-brand-red flex items-center justify-center transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest text-sm text-brand-red mb-5">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-gray-400 text-sm hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest text-sm text-brand-red mb-5">Business Hours</h4>
            <div className="space-y-2 text-sm">
              {[
                { day: 'Monday – Friday', hrs: '9:00 AM – 8:00 PM' },
                { day: 'Saturday', hrs: '9:00 AM – 7:30 PM' },
                { day: 'Sunday', hrs: 'Closed' },
              ].map(row => (
                <div key={row.day} className="flex items-start justify-between gap-4">
                  <span className="text-gray-400">{row.day}</span>
                  <span className={row.hrs === 'Closed' ? 'text-gray-500' : 'text-white font-medium'}>{row.hrs}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest text-sm text-brand-red mb-5">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:9542368174" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  <Phone size={15} className="mt-0.5 text-brand-red shrink-0" />
                  <span>(954) 236-8174</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@planetauto.com" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                  <Mail size={15} className="mt-0.5 text-brand-red shrink-0" />
                  <span>info@planetauto.com</span>
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/T2AYWEcfXbFK62PM9" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                  <MapPin size={15} className="mt-0.5 text-brand-red shrink-0" />
                  <span>Shizhong District, Jinan
市中区
Jinan, Shandong
China</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Planet Auto. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
