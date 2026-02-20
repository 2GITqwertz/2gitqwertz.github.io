import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { techniquesConfig } from '@/config';

export default function TechniquesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header on scroll
      gsap.fromTo(
        headerRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate cards on scroll
      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="techniques"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-white"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-[#2a7a7a] mb-4">
            {techniquesConfig.sectionTitle}
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            {techniquesConfig.sectionSubtitle}
          </p>
        </div>

        {/* Technique Cards */}
        <div ref={cardsRef} className="space-y-10">
          {techniquesConfig.techniques.map((technique) => (
            <div
              key={technique.id}
              id={technique.id}
              className="group"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {technique.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-2">
                {technique.description}
              </p>
              {technique.details && (
                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                  {technique.details}
                </p>
              )}
              <a
                href={technique.ctaHref}
                className="inline-block text-sm text-[#2a7a7a] hover:text-[#1f5f5f] transition-colors"
              >
                {technique.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
