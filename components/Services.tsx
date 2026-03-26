import SectionWrapper from "./SectionWrapper";

interface ServiceCardProps {
  tag?: string;
  title: string;
  duration: string;
  price: string;
  features: string[];
  ctaText: string;
  featured?: boolean;
}

function ServiceCard({
  tag,
  title,
  duration,
  price,
  features,
  ctaText,
  featured = false,
}: ServiceCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col ${
        featured
          ? "bg-gray-900 text-white ring-2 ring-gray-900"
          : "bg-white border border-gray-200"
      }`}
    >
      {tag && (
        <span className="absolute -top-3 left-8 bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {tag}
        </span>
      )}

      <div>
        <p
          className={`text-sm font-medium ${
            featured ? "text-gray-400" : "text-gray-400"
          }`}
        >
          {duration}
        </p>
        <h3
          className={`mt-2 text-xl font-bold ${
            featured ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>

        <div className="mt-6 flex items-baseline gap-1">
          <span
            className={`text-4xl font-bold ${
              featured ? "text-white" : "text-gray-900"
            }`}
          >
            {price}
          </span>
          <span
            className={`text-sm ${featured ? "text-gray-400" : "text-gray-400"}`}
          >
            / session
          </span>
        </div>
      </div>

      <ul className="mt-8 space-y-3 flex-grow">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <svg
              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                featured ? "text-gray-300" : "text-gray-900"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className={featured ? "text-gray-300" : "text-gray-600"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#payment"
        className={`mt-8 block text-center font-semibold px-6 py-3 rounded-xl transition-colors ${
          featured
            ? "bg-white text-gray-900 hover:bg-gray-100"
            : "bg-gray-900 text-white hover:bg-gray-700"
        }`}
      >
        {ctaText}
      </a>
    </div>
  );
}

export default function Services() {
  return (
    <SectionWrapper id="services" background="white">
      <div className="text-center mb-14 fade-in-section">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Services
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          One clear offer
        </h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          A focused, high-impact coaching session designed to move the needle
          immediately.
        </p>
      </div>

      <div className="max-w-md mx-auto fade-in-section">
        <ServiceCard
          tag="Most popular"
          title="Mock Interview + Feedback"
          duration="45 min live session"
          price="₹499"
          featured={true}
          ctaText="Book this session →"
          features={[
            "45-minute live video session",
            "3–5 mock interview questions",
            "Structured answer frameworks (STAR, SCQA)",
            "Real-time corrections and coaching",
            "Written feedback summary after session",
            "Personalized improvement plan",
            "1 follow-up message for questions",
          ]}
        />
      </div>

      <p className="text-center text-sm text-gray-400 mt-8">
        Need a custom arrangement?{" "}
        <a href="#contact" className="text-gray-900 underline underline-offset-2">
          Get in touch
        </a>
      </p>
    </SectionWrapper>
  );
}
