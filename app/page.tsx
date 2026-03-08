// app/page.tsx
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* You can add more sections later */}
      <section id="features" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900">
            Features that matter
          </h2>
          {/* ... add feature cards ... */}
        </div>
      </section>

      {/* More sections: testimonials, pricing, CTA, etc. */}
    </div>
  );
}