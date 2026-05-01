import { motion } from 'framer-motion';
import { ExternalLink, Smartphone } from 'lucide-react';

export function StartupLinks({
  website,
  app,
  compact,
}: {
  website: string;
  app?: string;
  compact?: boolean;
}) {
  const btnClass = compact ? 'startup-links__btn startup-links__btn--sm' : 'startup-links__btn';

  return (
    <div className="startup-links">
      <motion.a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className={btnClass}
        whileTap={{ scale: 0.97 }}
      >
        Website
        <ExternalLink size={compact ? 14 : 15} aria-hidden strokeWidth={2} />
      </motion.a>
      {app ? (
        <motion.a
          href={app}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnClass} startup-links__btn--muted`}
          whileTap={{ scale: 0.97 }}
        >
          App
          <Smartphone size={compact ? 14 : 15} aria-hidden strokeWidth={2} />
        </motion.a>
      ) : null}
    </div>
  );
}
