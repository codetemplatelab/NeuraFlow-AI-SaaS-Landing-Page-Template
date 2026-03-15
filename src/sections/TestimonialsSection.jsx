import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { testimonials } from '../data/testimonials'

export const TestimonialsSection = () => (
  <section id="testimonials" className="section bg-slate-50 dark:bg-midnight">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading
        eyebrow="Testimonials"
        title="Loved by teams building the future"
        description="Proof that premium presentation converts. Swap in your own customer stories and logos."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/5"
          >
            <div className="flex gap-1 text-ink-400">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={starIndex} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="mt-5 text-sm text-slate-600 dark:text-slate-300">
              “{testimonial.quote}”
            </p>
            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {testimonial.name}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                {testimonial.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

