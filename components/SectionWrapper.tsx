import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: ReactNode;
  background?: "white" | "gray" | "black";
}

export default function SectionWrapper({
  id,
  className = "",
  children,
  background = "white",
}: SectionWrapperProps) {
  const bgMap = {
    white: "bg-white",
    gray: "bg-gray-50",
    black: "bg-gray-900 text-white",
  };

  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${bgMap[background]} ${className}`}
    >
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}
