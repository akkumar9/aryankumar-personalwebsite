import SectionPrompt from "./SectionPrompt";

const fields: { key: string; value: string; href?: string }[] = [
  {
    key: "email",
    value: "mail.to.aryankumar@gmail.com",
    href: "mailto:mail.to.aryankumar@gmail.com",
  },
  {
    key: "linkedin",
    value: "aryan-kumar-85b444265",
    href: "https://linkedin.com/in/aryan-kumar-85b444265",
  },
  { key: "github", value: "akkumar9", href: "https://github.com/akkumar9" },
  { key: "location", value: "San Diego / Bay Area, CA" },
  { key: "status", value: "open to internships starting winter 2027" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 scroll-mt-12">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10">
            <SectionPrompt command="cat contact.json" />
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          </div>

          <p className="text-muted-foreground mb-8 max-w-lg">
            Studying computer engineering at UCSD, working on AI integrations,
            backend systems, and robotics research. Reach out if you're hiring
            for LLM applications, systems work, or autonomous systems, or if
            you just want to talk shop.
          </p>

          <div className="border border-border rounded bg-card px-6 py-5 font-mono text-sm">
            <div>{"{"}</div>
            {fields.map((field) => (
              <div key={field.key} className="grid grid-cols-[7.5rem_1fr] gap-2 pl-4">
                <span className="text-muted-foreground">"{field.key}":</span>
                {field.href ? (
                  <a
                    href={field.href}
                    target={field.href.startsWith("http") ? "_blank" : undefined}
                    rel={field.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-primary hover:underline underline-offset-2 truncate"
                  >
                    "{field.value}"
                  </a>
                ) : (
                  <span className="text-foreground/90">"{field.value}"</span>
                )}
              </div>
            ))}
            <div>{"}"}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
