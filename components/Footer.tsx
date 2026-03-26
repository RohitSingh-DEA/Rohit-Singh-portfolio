import { COACH_NAME, WHATSAPP_NUMBER, LINKEDIN_URL } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-lg">{COACH_NAME}</p>
            <p className="text-sm mt-1">Stakeholder Communication & Interview Clarity Coach</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors text-sm"
            >
              WhatsApp
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="#booking"
              className="hover:text-white transition-colors text-sm"
            >
              Book a Session
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-xs">
          <p>© {year} {COACH_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
