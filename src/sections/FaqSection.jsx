import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import { ChevronDown } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { faqs } from '../data/faqs'

export const FaqSection = () => (
  <section id="faq" className="section">
    <div className="mx-auto max-w-4xl px-6">
      <SectionHeading
        eyebrow="FAQ"
        title="Questions, answered"
        description="Everything you need to know about the template, customization, and deployment."
        align="center"
      />
      <div className="mt-10 space-y-4">
        {faqs.map((faq) => (
          <Accordion
            key={faq.question}
            disableGutters
            sx={(theme) => ({
              backgroundColor: 'transparent',
              borderRadius: '20px',
              border:
                theme.palette.mode === 'dark'
                  ? '1px solid rgba(99,102,241,0.35)'
                  : '1px solid rgba(99,102,241,0.2)',
              boxShadow: 'none',
              '&:before': { display: 'none' },
            })}
          >
            <AccordionSummary
              expandIcon={<ChevronDown size={18} />}
              sx={{
                padding: '18px 24px',
                color: 'inherit',
                '& .MuiAccordionSummary-content': { margin: 0 },
              }}
            >
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {faq.question}
              </p>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0 24px 20px' }}>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {faq.answer}
              </p>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  </section>
)
