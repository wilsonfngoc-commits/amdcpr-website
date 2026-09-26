/**
 * Scroll reveal animations using IntersectionObserver
 *
 * Elements with data-reveal fade up from translate-y-8.
 * Child elements with data-reveal-delay="i" stagger their reveals.
 * Uses custom cubic-bezier(0.32, 0.72, 0, 1) for premium feel.
 */

const CUSTOM_EASE = 'cubic-bezier(0.32, 0.72, 0, 1)';

interface RevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function initScrollReveal(options: RevealOptions = {}): void {
  const { threshold = 0.1, rootMargin = '0px 0px -60px 0px' } = options;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const children = el.querySelectorAll<HTMLElement>('[data-reveal-delay]');
          if (children.length > 0) {
            children.forEach((child, i) => {
              const delay = parseInt(child.dataset.revealDelay || String(i), 10);
              setTimeout(() => {
                child.style.opacity = '1';
                child.style.transform = 'translateY(0)';
              }, delay * 100);
            });
          } else {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }
          observer.unobserve(el);
        }
      });
    },
    { threshold, rootMargin }
  );

  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    const children = el.querySelectorAll<HTMLElement>('[data-reveal-delay]');
    if (children.length > 0) {
      children.forEach((child) => {
        child.style.opacity = '0';
        child.style.transform = 'translateY(1.5rem)';
        child.style.transition = `all 800ms ${CUSTOM_EASE}`;
      });
    } else {
      el.style.opacity = '0';
      el.style.transform = 'translateY(1.5rem)';
      el.style.transition = `all 800ms ${CUSTOM_EASE}`;
    }
    observer.observe(el);
  });
}
