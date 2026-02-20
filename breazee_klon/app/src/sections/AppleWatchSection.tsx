import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { appleWatchConfig } from '@/config';

export default function AppleWatchSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate content on scroll
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-white"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div ref={contentRef}>
          <h2 className="text-2xl sm:text-3xl font-light text-[#2a7a7a] mb-6">
            {appleWatchConfig.sectionTitle}
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            {appleWatchConfig.description}
          </p>

          {/* Features List */}
          <ul className="space-y-3">
            {appleWatchConfig.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-base text-gray-700"
              >
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
