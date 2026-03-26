import SectionWrapper from "./SectionWrapper";

const audience = [
  {
    icon: "🎯",
    title: "Interview Preppers",
    description:
      "Professionals who get nervous, go blank, or give rambling answers during interviews — even when they know the material.",
  },
  {
    icon: "📊",
    title: "Unclear Communicators",
    description:
      "People who struggle to explain their work, projects, or ideas in a way that resonates with non-technical stakeholders.",
  },
  {
    icon: "🤝",
    title: "Stakeholder Managers",
    description:
      "Those who find it hard to get buy-in, manage up, or hold difficult conversations without losing confidence.",
  },
  {
    icon: "🚀",
    title: "Career Changers",
    description:
      "Professionals pivoting to a new role who need to bridge the narrative gap between where they are and where they want to be.",
  },
];

export default function WhoThisIsFor() {
  return (
    <SectionWrapper id="who" background="white">
      <div className="text-center mb-14 fade-in-section">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Who this is for
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Is this you?
        </h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          This coaching is built for a specific type of professional — ambitious,
          capable, but held back by how they communicate.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {audience.map((item, i) => (
          <div
            key={item.title}
            className={`fade-in-section delay-${(i + 1) * 100} bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all`}
          >
            <span className="text-2xl">{item.icon}</span>
            <h3 className="mt-4 font-semibold text-gray-900 text-lg">
              {item.title}
            </h3>
            <p className="mt-2 text-gray-500 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
