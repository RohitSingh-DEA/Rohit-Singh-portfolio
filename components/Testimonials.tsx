import SectionWrapper from "./SectionWrapper";

const testimonials = [
  {
    name: "Priya S.",
    role: "Product Manager, Bangalore",
    text: "I'd failed 3 interviews in a row. After one session with Rohit, I understood exactly what I was doing wrong. Got an offer within 2 weeks.",
    rating: 5,
  },
  {
    name: "Amit K.",
    role: "Data Analyst, Mumbai",
    text: "The STAR framework Rohit taught me was a game changer. I went from rambling answers to concise, structured responses that impressed my interviewers.",
    rating: 5,
  },
  {
    name: "Sneha R.",
    role: "Engineering Manager, Hyderabad",
    text: "I was terrified of stakeholder presentations. Now I look forward to them. Rohit's communication frameworks are practical and immediately usable.",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" background="white">
      <div className="text-center mb-14 fade-in-section">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Testimonials
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          What clients say
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className={`fade-in-section delay-${(i + 1) * 100} bg-gray-50 rounded-2xl p-6 border border-gray-100`}
          >
            <StarRating count={t.rating} />
            <p className="mt-4 text-gray-700 text-sm leading-relaxed italic">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              {/* Avatar placeholder */}
              <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm font-semibold">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-400">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
