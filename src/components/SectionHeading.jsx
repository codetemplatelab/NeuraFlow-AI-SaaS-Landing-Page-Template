import { cn } from '../utils/cn'

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  titleClassName,
  descriptionClassName,
  eyebrowClassName,
}) => (
  <div className={cn('space-y-4', align === 'center' && 'text-center', className)}>
    {eyebrow && (
      <p className={cn('pill', eyebrowClassName)}>{eyebrow}</p>
    )}
    <h2 className={cn('section-title', titleClassName)}>{title}</h2>
    {description && (
      <p className={cn('section-subtitle', descriptionClassName)}>
        {description}
      </p>
    )}
  </div>
)

