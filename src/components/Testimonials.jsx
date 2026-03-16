import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Khalil H.',
    date: 'Aug 2024',
    rating: 5,
    text: 'After being away for a year I wanted to treat my wife to something special. They hooked me up with a beautiful BMW 428XI and helped me get financing the same day with a surprisingly low interest rate. All the staff are very professional yet very friendly and go above and beyond!',
    initials: 'KH',
    color: 'bg-blue-600',
  },
  {
    name: 'Moe E.',
    date: 'Aug 2024',
    rating: 5,
    text: 'I had an outstanding experience at Planet Auto. The team was incredibly knowledgeable and patient. Clear and transparent guidance throughout the financing process. They make a powerhouse team that goes above and beyond to make sure you leave satisfied.',
    initials: 'ME',
    color: 'bg-green-700',
  },
  {
    name: 'Kurt T.',
    date: 'Aug 2024',
    rating: 5,
    text: 'These people literally stepped up when nobody else wanted to. They helped me get into a new truck and helped me rebuild my credit. If you\'re looking for the best deal in Shandong — five stars all the way. Thank you Planet Auto!',
    initials: 'KT',
    color: 'bg-purple-700',
  },
  {
    name: 'Ben S.',
    date: 'Aug 2024',
    rating: 5,
    text: 'From the moment I walked in, the staff was friendly, professional, and incredibly helpful. The entire buying process was smooth and transparent, with no hidden fees or pressure tactics. I truly felt valued as a customer.',
    initials: 'BS',
    color: 'bg-orange-600',
  },
  {
    name: 'Muhammad S.',
    date: 'Jul 2024',
    rating: 5,
    text: 'Me and my kids enjoyed the planet breakfast. Staff members were very professional and courteous. The process was very streamlined and straightforward. Would definitely recommend for anyone interested in buying a used car.',
    initials: 'MS',
    color: 'bg-teal-700',
  },
  {
    name: 'Maryam D.',
    date: 'Aug 2024',
    rating: 5,
    text: 'Amazing service and workers. Would recommend to anyone! Great selection of vehicles and very helpful staff throughout the entire process.',
    initials: 'MD',
    color: 'bg-brand-red',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white" id="reviews">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-brand-red font-heading font-bold uppercase tracking-widest text-xs mb-3">
            Google Reviews
          </span>
          <h2 className="section-title mb-4">What Our Customers<br />Say About Us</h2>
          {/* Stars row */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
            ))}
            <span className="font-heading font-bold text-xl text-brand-dark ml-2">4.9</span>
            <span className="text-gray-400 text-sm">/ 5 — 200+ Reviews</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-brand-light p-6 border border-gray-100 relative hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <Quote size={28} className="text-brand-red/20 absolute top-5 right-5" />
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              {/* Review text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow line-clamp-5">{r.text}</p>
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className={`w-9 h-9 ${r.color} rounded-full flex items-center justify-center text-white font-heading font-bold text-sm shrink-0`}>
                  {r.initials}
                </div>
                <div>
                  <p className="font-body font-semibold text-sm text-brand-dark">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Planet+Auto"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            Read All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
