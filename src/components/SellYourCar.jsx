import { Clock, DollarSign, ThumbsUp, ArrowRight } from 'lucide-react'

const steps = [
  { icon: Clock, label: 'Takes only 30 minutes' },
  { icon: DollarSign, label: 'No-obligation offer' },
  { icon: ThumbsUp, label: 'Cheque in hand same day' },
]

export default function SellYourCar() {
  return (
    <section className="py-24 bg-brand-light" id="sell">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-red/20 pointer-events-none" />
            <img
              src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=75"
              alt="Sell your car"
              className="w-full h-80 object-cover relative z-10"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-6 right-6 bg-brand-red text-white p-5 z-20">
              <div className="font-heading font-black text-3xl leading-none">30</div>
              <div className="font-heading font-bold text-xs uppercase tracking-wider">Minutes</div>
              <div className="text-xs text-white/80 mt-1">To get an offer</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-brand-red font-heading font-bold uppercase tracking-widest text-xs mb-3">
              We Buy Cars
            </span>
            <h2 className="section-title mb-5">
              Looking To<br /><span className="text-brand-red">Sell Your Car?</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">
              You don't need to trade in. Planet Auto will happily purchase your vehicle outright. In as little as 30 minutes you'll have a no-obligation offer — and if you like it, we'll write you a cheque on the spot.
            </p>

            {/* Steps */}
            <div className="flex flex-wrap gap-6 mb-10">
              {steps.map(s => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-red/10 flex items-center justify-center">
                    <s.icon size={18} className="text-brand-red" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{s.label}</span>
                </div>
              ))}
            </div>

            <a href="#" className="btn-red inline-flex items-center gap-2">
              Sell My Car <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
