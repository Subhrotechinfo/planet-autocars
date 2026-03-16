import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const hours = [
  { day: 'Sunday', time: 'Closed', closed: true },
  { day: 'Monday – Friday', time: '9:00 AM – 8:00 PM', closed: false },
  { day: 'Saturday', time: '9:00 AM – 7:30 PM', closed: false },
]

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="py-24 bg-brand-dark text-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left info */}
          <div>
            <span className="inline-block text-brand-red font-heading font-bold uppercase tracking-widest text-xs mb-3">
              Find Us
            </span>
            <h2 className="font-heading font-black uppercase text-white text-5xl leading-none mb-6">
              Contact<br /><span className="text-brand-red">Us</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-md">
              Conveniently located in NE Shandong near the Shandong Zoo and TELUS Spark, serving drivers from Marlborough, Downtown, and all four quadrants.
            </p>

            {/* Info items */}
            <div className="space-y-5 mb-10">
              <a href="tel:9542368174" className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-brand-red flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Call Us</p>
                  <p className="text-white font-medium group-hover:text-brand-red transition-colors">(954) 236-8174</p>
                </div>
              </a>
              <a href="mailto:info@planetauto.com" className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-brand-red flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Email Us</p>
                  <p className="text-white font-medium group-hover:text-brand-red transition-colors">info@planetauto.com</p>
                </div>
              </a>
              <a
                href="https://maps.app.goo.gl/T2AYWEcfXbFK62PM9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 bg-brand-red flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Visit Us</p>
                  <p className="text-white font-medium group-hover:text-brand-red transition-colors">Shizhong District, Jinan
市中区
Jinan, Shandong
China</p>
                </div>
              </a>
            </div>

            {/* Hours */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock size={15} className="text-brand-red" />
                <h4 className="font-heading font-bold uppercase tracking-wider text-sm text-brand-red">Hours of Operation</h4>
              </div>
              <div className="space-y-2">
                {hours.map(h => (
                  <div key={h.day} className="flex justify-between text-sm py-2 border-b border-white/10">
                    <span className="text-gray-400">{h.day}</span>
                    <span className={h.closed ? 'text-gray-500' : 'text-white font-medium'}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right form */}
          <div>
            <div className="bg-white/5 border border-white/10 p-8">
              <h3 className="font-heading font-bold uppercase text-2xl mb-6 tracking-tight">Ask a Question</h3>

              {sent ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 bg-green-600 flex items-center justify-center mx-auto mb-4">
                    <ArrowRight size={24} className="text-white" />
                  </div>
                  <p className="font-heading font-bold text-xl uppercase">Message Sent!</p>
                  <p className="text-gray-400 text-sm mt-2">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/10 border border-white/10 text-white placeholder-gray-500 px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white/10 border border-white/10 text-white placeholder-gray-500 px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
                        placeholder="(954)000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/10 border border-white/10 text-white placeholder-gray-500 px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/10 border border-white/10 text-white placeholder-gray-500 px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors resize-none"
                      placeholder="I'm interested in a vehicle..."
                    />
                  </div>
                  <button type="submit" className="btn-red w-full py-3.5 text-sm inline-flex items-center justify-center gap-2">
                    Send Message <ArrowRight size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
