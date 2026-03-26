import SectionWrapper from "./SectionWrapper";
import { COACH_NAME } from "@/lib/constants";

const stats = [
  { value: "200+", label: "Professionals coached" },
  { value: "85%", label: "Interview success rate" },
  { value: "5★", label: "Average rating" },
];

export default function About() {
  return (
    <SectionWrapper id="about" background="gray">
      <div className="fade-in-section grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Knowledge alone won&apos;t get you the job. Communication will.
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Hi, I&apos;m <strong>{COACH_NAME}</strong>. After years in the industry, I
              noticed a pattern — brilliant professionals failing interviews and
              stakeholder meetings not because they lacked skills, but because
              they couldn&apos;t articulate them.
            </p>
            <p>
              I built a coaching system focused on three things: <strong>clarity</strong>,{" "}
              <strong>structure</strong>, and <strong>confidence</strong>. My
              clients don&apos;t just prepare answers — they learn to think and
              communicate like leaders.
            </p>
            <p>
              Whether you&apos;re preparing for your next big interview or
              struggling to get buy-in from stakeholders, I&apos;ll help you
              communicate in a way that makes people listen.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 md:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100"
            >
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-2 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
