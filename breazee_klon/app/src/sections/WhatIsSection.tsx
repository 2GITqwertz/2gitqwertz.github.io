import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { whatIsConfig } from '@/config';

export default function WhatIsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title on scroll
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate description on scroll
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-white"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2
          ref={titleRef}
          className="text-2xl sm:text-3xl font-light text-[#2a7a7a] mb-6"
        >
          {whatIsConfig.sectionTitle}
        </h2>
        <p
          ref={descRef}
          className="text-base text-gray-600 leading-relaxed"
        >
          {whatIsConfig.description}
        </p>
      </div>
    </section>
  );
}
