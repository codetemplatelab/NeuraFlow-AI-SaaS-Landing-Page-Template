import { useState } from 'react'
import { socialLinks } from '../data/socials'
import { navItems } from '../data/navigation'
import { Button } from '../ui/Button'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useLocalStorage(
    'neura-newsletter',
    '',
  )
  const [email, setEmail] = useState(newsletterEmail)
  const [submitted, setSubmitted] = useState(Boolean(newsletterEmail))

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email) return
    setNewsletterEmail(email)
    setSubmitted(true)
  }

  return (
    <footer className="border-t border-ink-200/60 bg-white/80 py-16 dark:border-white/10 dark:bg-white/5">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-xl font-semibold text-slate-900 dark:text-white">
            NeuraFlow <span className="text-neon-400">AI</span>
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Automate your workflows with AI-powered intelligence. Built for
            modern SaaS teams who want speed and clarity.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition hover:text-neon-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Navigation
          </p>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={`#${item.href}`} className="hover:text-slateblue-600">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Newsletter
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Monthly product updates, platform releases, and growth playbooks.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-full border border-ink-200/60 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-slateblue-300 dark:border-white/10 dark:bg-white/10 dark:text-white"
              required
            />
            <Button type="submit" variant="primary">
              {submitted ? 'You are subscribed' : 'Subscribe'}
            </Button>
          </form>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {submitted
              ? 'Thanks for joining! We saved your email in localStorage.'
              : 'No spam. Unsubscribe anytime.'}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-start justify-between gap-4 border-t border-ink-200/60 px-6 pt-6 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row">
        <span>? 2026 NeuraFlow AI. All rights reserved.</span>
        <span>Built for premium SaaS launches.</span>
      </div>
    </footer>
  )
}
