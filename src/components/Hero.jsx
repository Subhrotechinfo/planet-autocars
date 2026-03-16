export default function Hero() {
  return (
    <section className="relative min-h-[92vh] bg-brand-dark overflow-hidden flex items-center">
      {/* Background image via CSS */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1600&q=80')`,
        }}
      />
      {/* Red gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/30" />
      {/* Red accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/40 px-4 py-1.5 mb-6 animate-fade-up">
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse" />
            <span className="text-brand-red font-heading font-bold uppercase tracking-widest text-xs">
              Shandong's #1 Used Car Dealer
            </span>
          </div>

          <h1 className="font-heading font-black uppercase text-white leading-none mb-6 animate-fade-up delay-100" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
            Used Car<br />
            <span className="text-brand-red">Dealership</span><br />
            In Shandong
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg animate-fade-up delay-200">
            Over 10 years of experience. Wide selection of sedans, SUVs, trucks &amp; vans. Flexible financing — even bad credit approved.
          </p>

          <div className="flex flex-wrap gap-3 animate-fade-up delay-300">
            <a href="#inventory" className="btn-red text-sm py-3.5 px-8 inline-flex items-center gap-2">
              View All Cars
            </a>
            <a href="#financing" className="btn-outline text-sm py-3.5 px-8 inline-flex items-center gap-2">
              Get Pre-Approved
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-14 flex gap-8 animate-fade-up delay-400">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '27+', label: 'Lending Partners' },
              { value: '500+', label: 'Happy Customers' },
              { value: '100%', label: 'Satisfaction' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-black text-3xl text-white leading-none">{stat.value}</div>
                <div className="text-gray-400 text-xs mt-1 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vehicle type quick links */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-sm border-t border-white/10 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 divide-x divide-white/10">
            {[
              { label: 'Cars', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=200&q=60', href: '#' },
              { label: 'Trucks', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=60', href: '#' },
              { label: 'SUVs', img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=200&q=60', href: '#' },
              { label: 'Vans', img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=200&q=60', href: '#' },
            ].map(cat => (
              <a
                key={cat.label}
                href={cat.href}
                className="flex items-center gap-4 px-8 py-4 hover:bg-brand-red/20 transition-colors group"
              >
                <img
                  src={cat.img}
                  alt={cat.label}
                  className="w-14 h-10 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <span className="font-heading font-bold uppercase tracking-wider text-white text-lg">
                  {cat.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
