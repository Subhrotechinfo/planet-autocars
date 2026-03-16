import { CheckCircle, ArrowRight } from 'lucide-react'

const perks = [
  'Approved in minutes from home or office',
  'Over 27 lending partners',
  'Bad credit & newcomers welcome',
  'Subprime and prime financing options',
  'Flexible loan terms to fit your budget',
  'No hidden fees or pressure tactics',
]

export default function FinancingSection() {
  return (
    <section className="relative py-0 overflow-hidden" id="financing">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
        {/* Image side */}
        <div className="relative min-h-[300px] lg:min-h-0">
          <img
            src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=900&q=75"
            alt="Car financing"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/60 to-transparent lg:from-transparent lg:to-brand-dark/40" />
        </div>

        {/* Content side */}
        <div className="bg-brand-dark text-white px-8 md:px-16 py-16 flex flex-col justify-center">
          <span className="text-brand-red font-heading font-bold uppercase tracking-widest text-xs mb-3">
            Flexible Auto Loans
          </span>
          <h2 className="font-heading font-black uppercase text-white text-5xl leading-none mb-5">
            Want To Talk<br /><span className="text-brand-red">Auto Finance?</span>
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-md">
            Our finance team works with over 27 lenders to get you the best rate possible — regardless of your credit history. Hundreds of drivers get pre-approved in just minutes.
          </p>

          <ul className="space-y-2.5 mb-10">
            {perks.map(p => (
              <li key={p} className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle size={15} className="text-brand-red shrink-0" />
                {p}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <a href="#" className="btn-red inline-flex items-center gap-2">
              Get Approved Now <ArrowRight size={15} />
            </a>
            <a href="#" className="btn-outline border-white/30 text-white hover:border-brand-red">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
