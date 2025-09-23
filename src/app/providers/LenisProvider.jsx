'use client';
import { useEffect } from 'react';

export default function LenisProvider({ children }) {
  useEffect(() => {
    let lenis;
    let rafId;

    // уважение prefers-reduced-motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return; // отключаем плавность, если пользователю нежелательны анимации

    (async () => {
      const { default: Lenis } = await import('@studio-freight/lenis');

      lenis = new Lenis({
        // твики под «масляное» ощущение
        lerp: 0.09, // 0..1 — чем выше, тем «вязче»
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1.1,
        touchMultiplier: 1.1,
      });

      // основной RAF-цикл
      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      // плавные якоря вида <a href="#id">
      const onClick = (e) => {
        const a = e.target.closest('a[href^="#"]');
        if (!a) return;
        const href = a.getAttribute('href');
        const el = document.querySelector(href);
        if (!el) return;

        e.preventDefault();
        lenis.scrollTo(el, {
          duration: 1.0,
          easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
          lock: false,
        });
      };
      document.addEventListener('click', onClick);

      // авто-скролл при загрузке с #hash (например, прямой переход)
      if (window.location.hash) {
        const el = document.querySelector(window.location.hash);
        if (el) {
          // даём макету отрисоваться
          setTimeout(() => {
            lenis.scrollTo(el, { duration: 1.0 });
          }, 0);
        }
      }

      // очистка
      return () => {
        document.removeEventListener('click', onClick);
        if (rafId) cancelAnimationFrame(rafId);
        if (lenis) lenis.destroy();
      };
    })();

    // no deps — инициализируем один раз
  }, []);

  return <>{children}</>;
}
