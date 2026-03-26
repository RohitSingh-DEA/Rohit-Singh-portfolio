import SectionWrapper from "./SectionWrapper";

const pillars = [
  {
    number: "01",
    title: "Confidence",
    description:
      "Eliminate nervousness and self-doubt. Learn to enter every conversation — interview or stakeholder meeting — with genuine, grounded confidence.",
    points: [
      "Reframe anxiety as readiness",
      "Own your narrative without arrogance",
      "Speak at the right pace and tone",
    ],
  },
  {
    number: "02",
    title: "Structure",
    description:
      "Stop rambling. Learn proven frameworks like STAR, SCQA, and Pyramid Principle to deliver crisp, compelling answers every time.",
    points: [
      "STAR method for behavioral questions",
      "Pyramid structure for complex ideas",
      "2-minute answer format",
    ],
  },
  {
    number: "03",
    title: "Clarity",
    description:
      "Say exactly what you mean in fewer words. Cut the filler, sharpen your message, and make your ideas stick with any audience.",
    points: [
      "Eliminate filler words",
      "Translate jargon for any audience",
      "Make every sentence count",
    ],
  },
];

export default function WhatYoullLearn() {
  return (
    <SectionWrapper id="learn" background="gray">
      <div className="text-center mb-14 fade-in-section">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          The Framework
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          What you&apos;ll learn
        </h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          Three pillars that transform how you communicate — permanently.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((pillar, i) => (
          <div
            key={pillar.title}
            className={`fade-in-section delay-${(i + 1) * 100} bg-white rounded-2xl p-8 border border-gray-100 shadow-sm`}
          >
            <span className="text-4xl font-bold text-gray-100 block">
              {pillar.number}
            </span>
            <h3 className="mt-2 text-xl font-bold text-gray-900">
              {pillar.title}
            </h3>
            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
              {pillar.description}
            </p>
            <ul className="mt-4 space-y-2">
              {pillar.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg
                    className="w-4 h-4 text-gray-900 mt-0.5 flex-shrink-0"
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
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
