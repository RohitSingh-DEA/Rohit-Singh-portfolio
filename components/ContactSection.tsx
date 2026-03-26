import SectionWrapper from "./SectionWrapper";
import { WHATSAPP_NUMBER, LINKEDIN_URL, COACH_NAME } from "@/lib/constants";

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" background="black">
      <div className="text-center mb-12 fade-in-section">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
          Contact
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Have questions? Let&apos;s talk.
        </h2>
        <p className="mt-4 text-gray-400 max-w-md mx-auto">
          Not sure if this is the right fit? Reach out and I&apos;ll respond
          within 24 hours.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-section">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20${encodeURIComponent(COACH_NAME)}%2C%20I%20want%20to%20know%20more%20about%20your%20coaching%20sessions.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.122 1.528 5.855L.069 23.384a.75.75 0 00.913.956l5.65-1.479A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.948-1.354l-.355-.212-3.688.966.982-3.587-.232-.368A9.712 9.712 0 012.25 12C2.25 6.59 6.59 2.25 12 2.25S21.75 6.59 21.75 12 17.41 21.75 12 21.75z" />
          </svg>
          Message on WhatsApp
        </a>

        {/* LinkedIn */}
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#0A66C2] hover:bg-[#0855a5] text-white font-semibold px-8 py-4 rounded-xl transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          Connect on LinkedIn
        </a>
      </div>

      <p className="text-center text-gray-500 text-sm mt-10 fade-in-section">
        Or book directly →{" "}
        <a href="#payment" className="text-white underline underline-offset-2">
          Pay & Schedule your session
        </a>
      </p>
    </SectionWrapper>
  );
}
