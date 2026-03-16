import { ArrowRight, Gauge, Fuel, Settings } from 'lucide-react'

const vehicles = [
  {
    id: 1,
    make: 'Toyota',
    model: 'RAV4',
    year: 2022,
    price: 34900,
    km: 32000,
    fuel: 'Hybrid',
    trans: 'Automatic',
    img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&q=75',
    badge: 'Hot Deal',
  },
  {
    id: 2,
    make: 'Ford',
    model: 'F-150',
    year: 2021,
    price: 49900,
    km: 54000,
    fuel: 'Gasoline',
    trans: 'Automatic',
    img: 'https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?w=600&q=75',
    badge: 'Popular',
  },
  {
    id: 3,
    make: 'Honda',
    model: 'CR-V',
    year: 2023,
    price: 38500,
    km: 18000,
    fuel: 'Gasoline',
    trans: 'Automatic',
    img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=75',
    badge: 'New Arrival',
  },
  {
    id: 4,
    make: 'BMW',
    model: '3 Series',
    year: 2020,
    price: 42000,
    km: 45000,
    fuel: 'Gasoline',
    trans: 'Automatic',
    img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=75',
    badge: null,
  },
  {
    id: 5,
    make: 'Chevrolet',
    model: 'Silverado 1500',
    year: 2022,
    price: 52000,
    km: 41000,
    fuel: 'Gasoline',
    trans: 'Automatic',
    img: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=600&q=75',
    badge: null,
  },
  {
    id: 6,
    make: 'Jeep',
    model: 'Grand Cherokee',
    year: 2021,
    price: 44500,
    km: 37000,
    fuel: 'Gasoline',
    trans: 'Automatic',
    img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=75',
    badge: 'Low KM',
  },
]

const badgeColors = {
  'Hot Deal': 'bg-brand-red text-white',
  'Popular': 'bg-amber-500 text-white',
  'New Arrival': 'bg-green-600 text-white',
  'Low KM': 'bg-blue-600 text-white',
}

export default function FeaturedInventory() {
  return (
    <section className="py-24 bg-white" id="inventory">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-brand-red font-heading font-bold uppercase tracking-widest text-xs mb-3">Browse Our Lot</span>
            <h2 className="section-title">Featured<br />Vehicles</h2>
          </div>
          <a href="#" className="flex items-center gap-2 text-brand-red font-heading font-bold uppercase text-sm tracking-wider hover:gap-3 transition-all">
            View All Inventory <ArrowRight size={16} />
          </a>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {['All', 'SUVs', 'Trucks', 'Sedans', 'Hybrids', 'Under $40K'].map((tab, i) => (
            <button
              key={tab}
              className={`px-5 py-2 text-sm font-heading font-bold uppercase tracking-wider transition-colors ${
                i === 0
                  ? 'bg-brand-red text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map(v => (
            <div key={v.id} className="group bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Image */}
              <div className="relative overflow-hidden aspect-video bg-gray-100">
                <img
                  src={v.img}
                  alt={`${v.year} ${v.make} ${v.model}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {v.badge && (
                  <span className={`absolute top-3 left-3 text-xs font-heading font-bold uppercase tracking-wider px-2.5 py-1 ${badgeColors[v.badge]}`}>
                    {v.badge}
                  </span>
                )}
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-300" />
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <p className="text-xs font-body text-gray-400 uppercase tracking-widest">{v.make}</p>
                    <h3 className="font-heading font-bold text-2xl text-brand-dark leading-tight">
                      {v.year} {v.model}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="font-heading font-black text-brand-red text-2xl leading-none">
                      ${v.price.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-400">+ taxes</p>
                  </div>
                </div>

                {/* Specs */}
                <div className="flex items-center gap-4 my-4 py-4 border-y border-gray-100">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Gauge size={13} className="text-brand-red" />
                    {(v.km / 1000).toFixed(0)}K km
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Fuel size={13} className="text-brand-red" />
                    {v.fuel}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Settings size={13} className="text-brand-red" />
                    {v.trans}
                  </div>
                </div>

                <div className="flex gap-2">
                  <a href="#" className="flex-1 btn-red text-center text-xs py-2.5">
                    View Details
                  </a>
                  <a href="#financing" className="flex-1 btn-outline text-center text-xs py-2.5">
                    Get Financing
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
