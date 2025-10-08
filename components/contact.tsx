import { Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-card bg-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Let's Work Together
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm currently open to new opportunities and exciting projects. Whether
          you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a
            href="mailto:ratukf@gmail.com"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity text-lg"
          >
            <Mail className="w-5 h-5" />
            ratukf@gmail.com
          </a>
          <div className="inline-flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span>Bandung, Indonesia • Remote</span>
          </div>
        </div>

        <div className="pt-8 border-t border-black">
          <p className="text-sm text-muted-foreground mb-4">Languages</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
              Bahasa Indonesia (Native)
            </span>
            <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
              English (Intermediate to Advanced)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
