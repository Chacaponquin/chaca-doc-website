import React from "react";

import "./content_section.css";

export default function ContentSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="home_content_section_container">
      <div className="home_content_section">{children}</div>
    </section>
  );
}
