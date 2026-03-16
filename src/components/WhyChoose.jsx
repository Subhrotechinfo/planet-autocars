import { ShieldCheck, CreditCard, Users, Star } from 'lucide-react'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Extensive Inventory',
    desc: 'A diverse selection of high-quality used cars including luxury brands like BMW and Maserati, and popular makes such as Ford and Toyota.',
  },
  {
    icon: CreditCard,
    title: 'Flexible Financing',
    desc: 'Partnerships with over 27 lenders, including options for subprime and prime financing. We specialize in making car ownership accessible for everyone.',
  },
  {
    icon: Star,
    title: 'Transparent Experience',
    desc: 'A no-pressure, friendly environment where all terms are clearly explained, ensuring a comfortable and trustworthy buying process.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    desc: 'Our experienced team of salespeople, managers, and mechanics is committed to your satisfaction before and after the sale.',
  },
]

export default function WhyChoose() {
  return (
    <section className="py-24 bg-brand-light" id="why-us">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-red font-heading font-bold uppercase tracking-widest text-xs mb-3">
            The Planet Difference
          </span>
          <h2 className="section-title">Why Choose<br />Planet Auto?</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="bg-white p-8 border border-gray-100 hover:border-brand-red hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
            >
              {/* Index number */}
              <span className="absolute top-4 right-5 font-heading font-black text-7xl text-gray-50 select-none leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="w-12 h-12 bg-brand-red/10 group-hover:bg-brand-red flex items-center justify-center mb-5 transition-colors duration-300">
                <r.icon size={22} className="text-brand-red group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-bold uppercase text-xl text-brand-dark mb-3 tracking-tight">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
