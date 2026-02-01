const projects = [
  {
    title: "Exclusive - Ongoing Ecommerce Platform Project",
    description:
      "Ecommerce web application using real authentication and product data. This project demonstrates the ability to build scalable front-end architecture, manage global state, and handle real-world user flows.",
    techStack: [
      "React",
      "React Router",
      "Redux",
      "Material UI",
      "Formik",
      "Yup",
      "Firebase",
    ],
    features: [
      "User authentication using Firebase",
      "Product list and product detail fetched from real database",
      "Protected routes for authenticated users",
      "Form handling and validation using Formik & Yup",
      "Global state management using Redux",
    ],
    inProgress: [
      "Cart and checkout flow",
      "Wishlist feature",
      "Responsive design",
      "UX and UI finishing",
    ],
    links: "https://ecommerce-exclusive-one.vercel.app/",
    github: "https://github.com/ratukf/ecommerce-exclusive",
    preview: "/projects1.png",
  },
  {
    title: "Coffee Monster - Coffee Shop Web App",
    description:
      "Coffee shop web application built to demonstrate front-end logic for product selection, cart management, and checkout flow without backend integration.",
    techStack: ["Next.js", "Typescript", "Tailwind CSS", "Jotai", "NextUI"],
    features: [
      "Dummy authentication",
      "Product detail view",
      "Add to cart and edit product quantity",
      "Checkout flow with payment and shipping selection",
      "Automatic total price calculation",
    ],
    inProgress: [],
    links: "https://coffee-shop-nextjs-2.vercel.app/",
    github: "https://github.com/ratukf/coffee-shop-nextjs",
    preview: "/projects2.png",
  },
  {
    title: "Smart Village Nusantara – Telkom's Concept Website",
    status: "",
    description:
      "Static multi-page website created by translating Figma design into a fully responsive web interface. This project focuses on UI implementation accuracy and layout consistency.",
    techStack: [
      "HTML",
      "CSS",
      "SCSS",
      "Bootstrap",
      "Javascript (Vanilla JS & jQuery)",
    ],
    features: [
      "Pixel - perfect implementation from Figma",
      "Responsive web design",
      "Multi-page navigation (Home, Services, News, Contact)",
      "Form validation and success modal",
      "Instagram post embed section",
    ],
    inProgress: [],
    links: "https://ratukf.github.io/SmartVillageNusantara/",
    github: "https://github.com/ratukf/SmartVillageNusantara",
    preview: "/projects3.png",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-card bg-foreground">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-background">
          Projects
        </h1>
        {projects.map((project, index) => (
          <div>
            <div className="group grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div key={index} className="mb-12">
                <h1 className="text-2xl font-bold text-white pb-4">
                  {project.title}
                </h1>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.links}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div
                className="
                opacity-0
                translate-y-4
                pointer-events-none
                transition-all duration-300
                group-hover:opacity-100
                group-hover:translate-y-0
                "
              >
                <img
                  src={project.preview}
                  alt="preview"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
