import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react'

const inventoryLinks = {
  'By Type': [
    { label: 'Sedans', href: '#' },
    { label: 'Trucks', href: '#' },
    { label: 'SUVs', href: '#' },
    { label: 'Vans', href: '#' },
    { label: 'Hybrids', href: '#' },
    { label: 'Electric Cars', href: '#' },
  ],
  'By Brand': [
    { label: 'Toyota', href: '#' },
    { label: 'Honda', href: '#' },
    { label: 'Ford', href: '#' },
    { label: 'Chevrolet', href: '#' },
    { label: 'BMW', href: '#' },
    { label: 'Nissan', href: '#' },
    { label: 'Kia', href: '#' },
    { label: 'Hyundai', href: '#' },
    { label: 'GMC', href: '#' },
    { label: 'Jeep', href: '#' },
    { label: 'Audi', href: '#' },
    { label: 'Tesla', href: '#' },
  ],
  'By Price': [
    { label: 'Under $5,000', href: '#' },
    { label: 'Under $10,000', href: '#' },
    { label: 'Under $20,000', href: '#' },
    { label: 'Under $25,000', href: '#' },
  ],
}

const financingLinks = [
  { label: 'Car Financing', href: '#' },
  { label: 'Bad Credit Car Loans', href: '#' },
  { label: 'Vehicles In My Budget', href: '#' },
  { label: 'Value Your Trade', href: '#' },
  { label: 'Newcomer Financing Program', href: '#' },
  { label: 'Car Lease Calculator', href: '#' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileInventory, setMobileInventory] = useState(false)
  const [mobileFinancing, setMobileFinancing] = useState(false)

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-dark text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <a href="tel:9542368174" className="flex items-center gap-1.5 hover:text-brand-red transition-colors">
              <Phone size={12} />
              <span>(954)236-8174</span>
            </a>
            <a href="mailto:info@planetauto.com" className="flex items-center gap-1.5 hover:text-brand-red transition-colors hidden sm:flex">
              <Mail size={12} />
              <span>info@planetauto.com</span>
            </a>
          </div>
          <span className="text-gray-400 hidden md:block">Shandong's Trusted Used Car Dealer – Over 10 Years of Experience</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-7 h-7 bg-brand-red flex items-center justify-center">
                <span className="text-white font-heading font-black text-base leading-none">PA</span>
              </div>
              <div>
                <div className="font-heading font-black text-xl leading-none text-brand-dark tracking-tight uppercase">Planet</div>
                <div className="font-heading font-bold text-xs text-brand-red tracking-[0.3em] uppercase leading-none">Auto</div>
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Inventory dropdown */}
            <div className="dropdown relative">
              <button className="nav-link flex items-center gap-1 py-5">
                Inventory <ChevronDown size={14} />
              </button>
              <div className="dropdown-menu absolute top-full left-0 bg-white shadow-xl border border-gray-100 w-[680px] p-6 z-50">
                <div className="grid grid-cols-3 gap-6">
                  {Object.entries(inventoryLinks).map(([group, links]) => (
                    <div key={group}>
                      <p className="font-heading font-bold uppercase text-xs tracking-widest text-brand-red mb-3">{group}</p>
                      <ul className="space-y-1.5">
                        {links.map(l => (
                          <li key={l.label}>
                            <a href={l.href} className="text-sm text-gray-600 hover:text-brand-red transition-colors">{l.label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <a href="#" className="btn-red text-xs py-2 px-5 inline-block">View All Inventory</a>
                </div>
              </div>
            </div>

            {/* Financing dropdown */}
            <div className="dropdown relative">
              <button className="nav-link flex items-center gap-1 py-5">
                Financing <ChevronDown size={14} />
              </button>
              <div className="dropdown-menu absolute top-full left-0 bg-white shadow-xl border border-gray-100 w-56 py-2 z-50">
                {financingLinks.map(l => (
                  <a key={l.label} href={l.href} className="block px-5 py-2 text-sm text-gray-600 hover:text-brand-red hover:bg-gray-50 transition-colors">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <a href="#" className="nav-link">Sell Your Car</a>
            <a href="#" className="nav-link">About Us</a>
            <a href="#" className="nav-link">Blog</a>
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a href="#" className="hidden sm:inline-flex btn-red text-xs py-2.5 px-5">
              Get Approved
            </a>
            <button
              className="lg:hidden p-2 text-brand-dark"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-6">
            <button
              className="w-full flex items-center justify-between py-3 text-sm font-medium text-gray-700 border-b border-gray-100"
              onClick={() => setMobileInventory(!mobileInventory)}
            >
              Inventory <ChevronDown size={16} className={mobileInventory ? 'rotate-180' : ''} />
            </button>
            {mobileInventory && (
              <div className="py-2 pl-4">
                {Object.entries(inventoryLinks).map(([group, links]) => (
                  <div key={group} className="mb-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">{group}</p>
                    {links.map(l => (
                      <a key={l.label} href={l.href} className="block py-1 text-sm text-gray-600">{l.label}</a>
                    ))}
                  </div>
                ))}
              </div>
            )}

            <button
              className="w-full flex items-center justify-between py-3 text-sm font-medium text-gray-700 border-b border-gray-100"
              onClick={() => setMobileFinancing(!mobileFinancing)}
            >
              Financing <ChevronDown size={16} className={mobileFinancing ? 'rotate-180' : ''} />
            </button>
            {mobileFinancing && (
              <div className="py-2 pl-4">
                {financingLinks.map(l => (
                  <a key={l.label} href={l.href} className="block py-1 text-sm text-gray-600">{l.label}</a>
                ))}
              </div>
            )}

            <a href="#" className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-100">Sell Your Car</a>
            <a href="#" className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-100">About Us</a>
            <a href="#" className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-100">Blog</a>
            <a href="#" className="btn-red block text-center mt-4 text-xs py-3">Get Approved Now</a>
            <a href="tel:9542368174" className="btn-dark block text-center mt-2 text-xs py-3">(954)888-8174</a>
          </div>
        )}
      </nav>
    </>
  )
}
