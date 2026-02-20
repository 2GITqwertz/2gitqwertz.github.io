import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { heroConfig } from '@/config';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate content on load
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          delay: 0.3,
        }
      );

      // Animate image on load
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power2.out',
          delay: 0.5,
        }
      );

      // Parallax effect on scroll
      gsap.to(imageRef.current, {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="start"
      ref={sectionRef}
      className="min-h-screen pt-16 bg-[#f0f0f0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-12rem)]">
          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
              {heroConfig.titleLine1}
              <br />
              {heroConfig.titleLine2}
            </h1>

            <p className="text-lg text-gray-600 font-medium">
              {heroConfig.subtitle}
            </p>

            <p className="text-base text-gray-600 max-w-lg leading-relaxed">
              {heroConfig.description}
            </p>

            <a
              href={heroConfig.ctaHref}
              className="inline-block text-sm text-[#2a7a7a] hover:text-[#1f5f5f] transition-colors"
            >
              {heroConfig.ctaText}
            </a>

            {/* App Store Badge */}
            <div className="pt-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.71-3.06 1.58-.67.78-1.26 2.02-1.1 3.14 1.19.09 2.38-.84 3.09-1.61z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none">Download on the</div>
                  <div className="text-sm font-semibold leading-tight">
                    App Store
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Image */}
          <div
            ref={imageRef}
            className="relative flex justify-center lg:justify-end"
          >
            <img
              src={heroConfig.image}
              alt={heroConfig.imageAlt}
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
