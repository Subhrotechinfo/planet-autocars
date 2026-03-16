import { ArrowRight } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="bg-brand-red py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-heading font-black uppercase text-white text-4xl md:text-5xl leading-none">
            Questioning Your<br />Financing Options?
          </h2>
          <p className="text-white/80 mt-2 text-sm">Get instant approval — no obligation, no pressure.</p>
        </div>
        <a
          href="#"
          className="bg-white text-brand-red font-heading font-bold uppercase tracking-widest text-sm px-10 py-4 hover:bg-brand-dark hover:text-white transition-colors duration-200 inline-flex items-center gap-2 whitespace-nowrap"
        >
          Get Approved Now <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
