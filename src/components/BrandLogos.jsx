const brands = [
  'Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Nissan',
  'Kia', 'Hyundai', 'GMC', 'Jeep', 'Audi', 'Tesla',
]

export default function BrandLogos() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-heading font-bold uppercase tracking-widest text-gray-400 mb-8">
          We Carry All Major Brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {brands.map(brand => (
            <a
              key={brand}
              href="#"
              className="px-5 py-2.5 border border-gray-200 hover:border-brand-red hover:text-brand-red text-gray-500 text-sm font-heading font-bold uppercase tracking-wider transition-all duration-150"
            >
              {brand}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
