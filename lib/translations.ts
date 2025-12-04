export type Language = "es" | "en"

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      blog: "Blog",
      contact: "Contacto",
    },
    hero: {
      subtitle: "Profesional Máster en TI",
      title1: "Carlos Antonio",
      title2: "Viloria Madera",
      description1: "Ingeniero de Sistemas · Magíster en Gestión de Proyectos TI",
      description2: "Scrum Master · Arquitecto de Soluciones",
      slogan:
        "La transformación es el resultado de la curiosidad continua y el aprendizaje estructurado en cada proyecto.",
      experience: "19+ años de experiencia",
      specialist: "Especialista ECM",
      cloud: "Cloud Architecture",
    },
    about: {
      title: "Perfil Profesional",
      intro1:
        "Profesional Máster en Tecnologías de la Información e Ingeniero de Sistemas, con más de 19 años de experiencia liderando proyectos estratégicos de TI en el sector público y privado. Especialista en gestión documental, automatización de procesos, arquitectura de soluciones y desarrollo de software.",
      intro2:
        "Reconocido por mi expertise técnico, liderazgo funcional y visión estratégica, con capacidad de articular áreas misionales, PMO, seguridad, proveedores externos y equipos técnicos para convertir necesidades institucionales en soluciones tecnológicas robustas, escalables y alineadas con estándares de Gobierno Digital y el SIG.",
      highlights: [
        {
          title: "Líder de Proyectos TI",
          description: "Gestión de proyectos estratégicos bajo PMI, PMBOK y metodologías ágiles",
        },
        {
          title: "Arquitecto de Soluciones",
          description: "Diseño e implementación de soluciones empresariales en .NET, Java, Azure",
        },
        {
          title: "Transformación Digital",
          description: "BPM, automatización de procesos y políticas de cero papel",
        },
        {
          title: "Gestión Documental ECM",
          description: "Especialista en IBM FileNet P8, Kofax y sistemas de gestión documental",
        },
      ],
    },
    experience: {
      title: "Experiencia Profesional",
      current: "Actual",
      responsibilities: "Funciones principales:",
      achievements: "Logros destacados:",
      jobs: [
        {
          title: "Profesional Máster V – Líder de Proyectos TI",
          company: "Colpensiones",
          location: "Bogotá, Colombia",
          period: "Marzo 2021 – Actual",
          responsibilities: [
            "Liderazgo técnico y funcional de proyectos estratégicos de TI",
            "Administración nacional del sistema ECM FileNet P8",
            "Coordinación de proyectos PETI: Historia Laboral, SFP II y Gestión Documental F2",
            "Gestión de proveedores tecnológicos (Kyndryl, IBM, Dacartec, Soaint, INDRA)",
          ],
          achievements: [
            "Optimización de la gestión documental, reduciendo tiempos operativos",
            "Estandarización de plantillas técnicas para toda la Vicepresidencia de Tecnología",
            "Consolidación de lineamientos para más de 350 sistemas de información",
          ],
        },
        {
          title: "Especialista en LCI - Arquitecto de Soluciones",
          company: "ITO Software S.A.S.",
          location: "Bogotá, Colombia",
          period: "Mayo 2021 – Marzo 2023",
          responsibilities: [
            "Especialista en Lenguaje Común de Intercambio de Información (LCI)",
            "Arquitecto de soluciones en .Net, VB.Net, C#, Java, SQL Server, Oracle y Azure",
            "Liderazgo en proyectos MinTIC, ICETEX y FONTIC con metodologías ágiles (SCRUM)",
            "Diseño de microservicios integrados en ESB WSO2",
          ],
        },
        {
          title: "Especialista Desarrollador de Soluciones III",
          company: "Ricoh Colombia S.A.",
          location: "Bogotá, Colombia",
          period: "Octubre 2019 – Marzo 2021",
          responsibilities: [
            "Análisis y diseño técnico-funcional de soluciones ECM",
            "Parametrización de módulos y soporte en integración con aplicaciones corporativas",
            "Implementación y soporte técnico de soluciones",
          ],
        },
        {
          title: "Coordinador de Proyectos TI",
          company: "Avianca S.A",
          location: "Bogotá, Colombia",
          period: "Junio 2010 – Noviembre 2014",
          responsibilities: [
            "Gestión de proyectos de TI para áreas de gestión humana y mantenimiento",
            "Análisis y diseño de arquitecturas de soluciones tecnológicas",
            "Desarrollo de software en .Net y administración de bases de datos Oracle/SQL Server",
          ],
          achievements: ["Promoción de analista de soporte a coordinador de proyectos IT"],
        },
      ],
    },
    skills: {
      title: "Habilidades Técnicas",
      categories: [
        {
          title: "Lenguajes de Programación",
          skills: ["C#", "VB.Net", "Java", "Python", "JavaScript", "SQL", "PL/SQL", "T-SQL"],
        },
        {
          title: "ECM / Gestión Documental",
          skills: ["IBM FileNet P8", "Kofax Capture", "Kofax KTM", "Kofax KTA", "DocuWare", "Yakidoo ECM"],
        },
        {
          title: "Cloud Computing",
          skills: ["Azure", "AWS", "Azure Functions", "Azure Storage", "EC2", "S3", "CloudWatch"],
        },
        {
          title: "Bases de Datos",
          skills: ["SQL Server", "Oracle", "PostgreSQL", "Azure SQL"],
        },
        {
          title: "Integración y Microservicios",
          skills: ["WSO2 ESB", "REST APIs", "SOAP", "XML", "JSON", "Microservicios"],
        },
        {
          title: "DevOps",
          skills: ["Azure DevOps", "Git", "CI/CD", "Docker", "Kubernetes", "YAML Pipelines"],
        },
        {
          title: "BPM",
          skills: ["Bizagi", "Oracle BPM", "Kofax Total Agility", "Automatización de Procesos"],
        },
        {
          title: "Gestión de Proyectos",
          skills: ["PMI", "PMBOK", "Scrum", "Kanban", "Jira", "Confluence", "MS Project"],
        },
      ],
      competenciesTitle: "Competencias Profesionales",
      competencies: [
        "Liderazgo técnico y funcional",
        "Comunicación asertiva",
        "Pensamiento sistémico y analítico",
        "Capacidad para trabajar bajo presión",
        "Toma de decisiones estratégicas",
        "Planeación y ejecución efectiva",
        "Alto nivel de documentación",
        "Trabajo en equipo",
      ],
    },
    education: {
      title: "Educación Formal",
      status: "Graduado",
      degrees: [
        {
          degree: "Máster Universitario en Diseño y Gestión de Proyectos Tecnológicos",
          institution: "Universidad Internacional de La Rioja – UNIR (España)",
          period: "2013 – 2014",
          details: "Convalidación MEN: Resolución 03373 del 07 de marzo de 2017",
        },
        {
          degree: "Ingeniero de Sistemas",
          institution: "Universidad Autónoma del Caribe",
          period: "2002 – 2007",
          details: "Tarjeta Profesional COPNIA: 08255165016ATL",
        },
        {
          degree: "Bachiller Académico",
          institution: "Colegio Comfamiliar del Atlántico",
          period: "1996 – 2001",
        },
      ],
    },
    certifications: {
      title: "Certificaciones y Estudios",
      subtitle: "Formación continua y certificaciones internacionales en tecnologías de vanguardia",
      categories: [
        {
          title: "Gestión Documental y ECM",
          certs: [
            "IBM FileNet P8 (Colpensiones)",
            "Kofax Capture 11.0 Certified",
            "Kofax Transformation 6.0 Certified",
            "DocuWare Sales Advisor",
            "Yakidoo ECM",
          ],
        },
        {
          title: "Gestión de Proyectos y Agile",
          certs: [
            "Scrum Master Professional Certified (SMPC)",
            "Scrum Foundation",
            "PMI Project Management",
            "MS Project",
          ],
        },
        {
          title: "Cloud Computing y DevOps",
          certs: [
            "Azure DevOps & Pipelines",
            "Azure Políticas para DevOps",
            "AWS para Profesionales IT",
            "Docker & Kubernetes",
            "DevOps Essential",
          ],
        },
        {
          title: "BPM y Automatización",
          certs: [
            "BPM Bizagi – Colpensiones",
            "BPM Bizagi – Universidad del Rosario",
            "Kofax Total Agility",
            "Automation with ECM",
          ],
        },
        {
          title: "Seguridad y Ciberseguridad",
          certs: [
            "Incidentes Cibernéticos – MinTIC",
            "Seguridad de la Información",
            "SARLAFT",
            "Protección de Datos Personales",
          ],
        },
        {
          title: "Idiomas y Otros",
          certs: ["Inglés B1 – Colombo Americano", "Inglés Técnico", "Reforma Pensional", "Lenguaje Claro"],
        },
      ],
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
    blog: {
      title: "Blog de Tecnología",
      subtitle: "Explorando innovación, desarrollo de software y transformación digital",
      categories: {
        all: "Todos",
        technology: "Tecnología",
        development: "Desarrollo",
        projectManagement: "Gestión de Proyectos",
        architecture: "Arquitectura",
        blockchain: "Blockchain",
        agile: "Metodologías Ágiles",
      },
      readMore: "Leer más",
      readingTime: "min de lectura",
      backToHome: "Volver al inicio",
      noResults: "No se encontraron artículos",
      filterBy: "Filtrar por categoría",
      articles: [
        {
          id: 1,
          title: "Arquitectura de Microservicios en la Nube",
          excerpt:
            "Explorando las mejores prácticas para diseñar e implementar arquitecturas de microservicios escalables en entornos cloud como Azure y AWS.",
          category: "architecture",
          image: "/microservices-architecture-cloud.jpg",
          date: "2024-11-15",
          readingTime: 8,
          tags: ["Azure", "Microservicios", "Cloud", "DevOps"],
        },
        {
          id: 2,
          title: "Scrum Master: El Arte de Facilitar Equipos Ágiles",
          excerpt:
            "Profundizando en las responsabilidades, desafíos y técnicas avanzadas del Scrum Master para maximizar el valor entregado por equipos de desarrollo.",
          category: "agile",
          image: "/scrum-agile-team-collaboration.jpg",
          date: "2024-11-10",
          readingTime: 6,
          tags: ["Scrum", "Agile", "Liderazgo", "Equipos"],
        },
        {
          id: 3,
          title: "Blockchain: Más Allá de las Criptomonedas",
          excerpt:
            "Casos de uso empresariales de blockchain en gestión de cadenas de suministro, contratos inteligentes y trazabilidad de documentos.",
          category: "blockchain",
          image: "/blockchain-enterprise-smart-contracts.jpg",
          date: "2024-11-05",
          readingTime: 10,
          tags: ["Blockchain", "Smart Contracts", "Enterprise", "Web3"],
        },
        {
          id: 4,
          title: "ITIL v4: Gestión de Servicios en la Era Digital",
          excerpt:
            "Cómo ITIL v4 se adapta a las metodologías ágiles y DevOps para mejorar la gestión de servicios de TI en organizaciones modernas.",
          category: "projectManagement",
          image: "/itil-service-management-digital.jpg",
          date: "2024-10-28",
          readingTime: 7,
          tags: ["ITIL", "Service Management", "DevOps", "Procesos"],
        },
        {
          id: 5,
          title: "IA Generativa en Desarrollo de Software",
          excerpt:
            "Explorando el impacto de ChatGPT, GitHub Copilot y otras herramientas de IA en el desarrollo de software y la productividad del desarrollador.",
          category: "development",
          image: "/ai-software-development-coding.jpg",
          date: "2024-10-20",
          readingTime: 9,
          tags: ["IA", "ChatGPT", "Desarrollo", "Productividad"],
        },
        {
          id: 6,
          title: "Gestión Documental ECM con FileNet P8",
          excerpt:
            "Mejores prácticas para implementar soluciones de gestión documental empresarial con IBM FileNet P8, desde la arquitectura hasta la operación.",
          category: "technology",
          image: "/document-management-enterprise-ecm.jpg",
          date: "2024-10-15",
          readingTime: 11,
          tags: ["ECM", "FileNet", "Gestión Documental", "IBM"],
        },
        {
          id: 7,
          title: "Azure DevOps: Pipeline CI/CD para .NET",
          excerpt:
            "Guía completa para configurar pipelines de integración y despliegue continuo en Azure DevOps para aplicaciones .NET Core y ASP.NET.",
          category: "development",
          image: "/azure-devops-pipeline-cicd.jpg",
          date: "2024-10-08",
          readingTime: 12,
          tags: ["Azure DevOps", "CI/CD", ".NET", "Automation"],
        },
        {
          id: 8,
          title: "Transformación Digital: De la Teoría a la Práctica",
          excerpt:
            "Experiencias reales liderando proyectos de transformación digital en el sector público, incluyendo automatización de procesos y políticas de cero papel.",
          category: "projectManagement",
          image: "/digital-transformation-business-process.jpg",
          date: "2024-09-30",
          readingTime: 10,
          tags: ["Transformación Digital", "BPM", "Automatización", "Gobierno"],
        },
        {
          id: 9,
          title: "Clean Architecture en Aplicaciones Empresariales",
          excerpt:
            "Implementando los principios de Clean Architecture y Domain-Driven Design en proyectos enterprise con .NET y Java.",
          category: "architecture",
          image: "/clean-architecture-software-design.jpg",
          date: "2024-09-22",
          readingTime: 13,
          tags: ["Clean Architecture", "DDD", "Design Patterns", "Enterprise"],
        },
      ],
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Tienes un proyecto en mente? Hablemos",
      form: {
        name: "Nombre completo",
        namePlaceholder: "Tu nombre",
        email: "Correo electrónico",
        emailPlaceholder: "tu@email.com",
        subject: "Asunto",
        subjectPlaceholder: "¿De qué te gustaría hablar?",
        message: "Mensaje",
        messagePlaceholder: "Cuéntame sobre tu proyecto o idea...",
        submit: "Enviar mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado exitosamente!",
        error: "Error al enviar el mensaje. Inténtalo de nuevo.",
      },
      info: {
        title: "Información de contacto",
        description:
          "Estoy disponible para colaborar en proyectos de transformación digital, arquitectura de soluciones y gestión de proyectos TI.",
        location: "Bogotá, Colombia",
        availability: "Disponible para proyectos remotos e híbridos",
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      subtitle: "IT Master Professional",
      title1: "Carlos Antonio",
      title2: "Viloria Madera",
      description1: "Systems Engineer · Master's Degree in IT Project Management",
      description2: "Scrum Master · Solutions Architect",
      slogan: "Transformation is the result of continuous curiosity and structured learning in every project.",
      experience: "19+ years of experience",
      specialist: "ECM Specialist",
      cloud: "Cloud Architecture",
    },
    about: {
      title: "Professional Profile",
      intro1:
        "Master Professional in Information Technology and Systems Engineer, with over 19 years of experience leading strategic IT projects in the public and private sectors. Specialist in document management, process automation, solution architecture, and software development.",
      intro2:
        "Recognized for my technical expertise, functional leadership, and strategic vision, with the ability to articulate mission areas, PMO, security, external vendors, and technical teams to transform institutional needs into robust, scalable technological solutions aligned with Digital Government standards and the SIG.",
      highlights: [
        {
          title: "IT Project Leader",
          description: "Strategic project management under PMI, PMBOK and agile methodologies",
        },
        {
          title: "Solutions Architect",
          description: "Design and implementation of enterprise solutions in .NET, Java, Azure",
        },
        {
          title: "Digital Transformation",
          description: "BPM, process automation and paperless policies",
        },
        {
          title: "ECM Document Management",
          description: "Specialist in IBM FileNet P8, Kofax and document management systems",
        },
      ],
    },
    experience: {
      title: "Professional Experience",
      current: "Current",
      responsibilities: "Main responsibilities:",
      achievements: "Key achievements:",
      jobs: [
        {
          title: "Master Professional V – IT Project Leader",
          company: "Colpensiones",
          location: "Bogotá, Colombia",
          period: "March 2021 – Current",
          responsibilities: [
            "Technical and functional leadership of strategic IT projects",
            "National administration of the ECM FileNet P8 system",
            "Coordination of PETI projects: Employment History, SFP II and Document Management F2",
            "Technology vendor management (Kyndryl, IBM, Dacartec, Soaint, INDRA)",
          ],
          achievements: [
            "Optimization of document management, reducing operational times",
            "Standardization of technical templates for the entire Technology Vice Presidency",
            "Consolidation of guidelines for more than 350 information systems",
          ],
        },
        {
          title: "LCI Specialist - Solutions Architect",
          company: "ITO Software S.A.S.",
          location: "Bogotá, Colombia",
          period: "May 2021 – March 2023",
          responsibilities: [
            "Specialist in Common Language for Information Exchange (LCI)",
            "Solutions architect in .Net, VB.Net, C#, Java, SQL Server, Oracle and Azure",
            "Leadership in MinTIC, ICETEX and FONTIC projects with agile methodologies (SCRUM)",
            "Microservices design integrated into ESB WSO2",
          ],
        },
        {
          title: "Solutions Developer Specialist III",
          company: "Ricoh Colombia S.A.",
          location: "Bogotá, Colombia",
          period: "October 2019 – March 2021",
          responsibilities: [
            "Technical-functional analysis and design of ECM solutions",
            "Module parameterization and support in integration with corporate applications",
            "Implementation and technical support of solutions",
          ],
        },
        {
          title: "IT Project Coordinator",
          company: "Avianca S.A",
          location: "Bogotá, Colombia",
          period: "June 2010 – November 2014",
          responsibilities: [
            "IT project management for human resources and maintenance areas",
            "Analysis and design of technological solution architectures",
            ".Net software development and Oracle/SQL Server database administration",
          ],
          achievements: ["Promotion from support analyst to IT project coordinator"],
        },
      ],
    },
    skills: {
      title: "Technical Skills",
      categories: [
        {
          title: "Programming Languages",
          skills: ["C#", "VB.Net", "Java", "Python", "JavaScript", "SQL", "PL/SQL", "T-SQL"],
        },
        {
          title: "ECM / Document Management",
          skills: ["IBM FileNet P8", "Kofax Capture", "Kofax KTM", "Kofax KTA", "DocuWare", "Yakidoo ECM"],
        },
        {
          title: "Cloud Computing",
          skills: ["Azure", "AWS", "Azure Functions", "Azure Storage", "EC2", "S3", "CloudWatch"],
        },
        {
          title: "Databases",
          skills: ["SQL Server", "Oracle", "PostgreSQL", "Azure SQL"],
        },
        {
          title: "Integration and Microservices",
          skills: ["WSO2 ESB", "REST APIs", "SOAP", "XML", "JSON", "Microservices"],
        },
        {
          title: "DevOps",
          skills: ["Azure DevOps", "Git", "CI/CD", "Docker", "Kubernetes", "YAML Pipelines"],
        },
        {
          title: "BPM",
          skills: ["Bizagi", "Oracle BPM", "Kofax Total Agility", "Process Automation"],
        },
        {
          title: "Project Management",
          skills: ["PMI", "PMBOK", "Scrum", "Kanban", "Jira", "Confluence", "MS Project"],
        },
      ],
      competenciesTitle: "Professional Competencies",
      competencies: [
        "Technical and functional leadership",
        "Assertive communication",
        "Systemic and analytical thinking",
        "Ability to work under pressure",
        "Strategic decision making",
        "Effective planning and execution",
        "High level of documentation",
        "Teamwork",
      ],
    },
    education: {
      title: "Formal Education",
      status: "Graduated",
      degrees: [
        {
          degree: "University Master's Degree in Technological Project Design and Management",
          institution: "Universidad Internacional de La Rioja – UNIR (Spain)",
          period: "2013 – 2014",
          details: "MEN Validation: Resolution 03373 of March 7, 2017",
        },
        {
          degree: "Systems Engineer",
          institution: "Universidad Autónoma del Caribe",
          period: "2002 – 2007",
          details: "Professional Card COPNIA: 08255165016ATL",
        },
        {
          degree: "Academic Bachelor",
          institution: "Colegio Comfamiliar del Atlántico",
          period: "1996 – 2001",
        },
      ],
    },
    certifications: {
      title: "Certifications and Studies",
      subtitle: "Continuous training and international certifications in cutting-edge technologies",
      categories: [
        {
          title: "Document Management and ECM",
          certs: [
            "IBM FileNet P8 (Colpensiones)",
            "Kofax Capture 11.0 Certified",
            "Kofax Transformation 6.0 Certified",
            "DocuWare Sales Advisor",
            "Yakidoo ECM",
          ],
        },
        {
          title: "Project Management and Agile",
          certs: [
            "Scrum Master Professional Certified (SMPC)",
            "Scrum Foundation",
            "PMI Project Management",
            "MS Project",
          ],
        },
        {
          title: "Cloud Computing and DevOps",
          certs: [
            "Azure DevOps & Pipelines",
            "Azure Policies for DevOps",
            "AWS for IT Professionals",
            "Docker & Kubernetes",
            "DevOps Essential",
          ],
        },
        {
          title: "BPM and Automation",
          certs: [
            "BPM Bizagi – Colpensiones",
            "BPM Bizagi – Universidad del Rosario",
            "Kofax Total Agility",
            "Automation with ECM",
          ],
        },
        {
          title: "Security and Cybersecurity",
          certs: ["Cyber Incidents – MinTIC", "Information Security", "SARLAFT", "Personal Data Protection"],
        },
        {
          title: "Languages and Others",
          certs: ["English B1 – Colombo Americano", "Technical English", "Pension Reform", "Plain Language"],
        },
      ],
    },
    footer: {
      rights: "All rights reserved.",
    },
    blog: {
      title: "Technology Blog",
      subtitle: "Exploring innovation, software development and digital transformation",
      categories: {
        all: "All",
        technology: "Technology",
        development: "Development",
        projectManagement: "Project Management",
        architecture: "Architecture",
        blockchain: "Blockchain",
        agile: "Agile Methodologies",
      },
      readMore: "Read more",
      readingTime: "min read",
      backToHome: "Back to home",
      noResults: "No articles found",
      filterBy: "Filter by category",
      articles: [
        {
          id: 1,
          title: "Microservices Architecture in the Cloud",
          excerpt:
            "Exploring best practices for designing and implementing scalable microservices architectures in cloud environments like Azure and AWS.",
          category: "architecture",
          image: "/microservices-architecture-cloud.jpg",
          date: "2024-11-15",
          readingTime: 8,
          tags: ["Azure", "Microservices", "Cloud", "DevOps"],
        },
        {
          id: 2,
          title: "Scrum Master: The Art of Facilitating Agile Teams",
          excerpt:
            "Diving deep into the responsibilities, challenges, and advanced techniques of the Scrum Master to maximize value delivered by development teams.",
          category: "agile",
          image: "/scrum-agile-team-collaboration.jpg",
          date: "2024-11-10",
          readingTime: 6,
          tags: ["Scrum", "Agile", "Leadership", "Teams"],
        },
        {
          id: 3,
          title: "Blockchain: Beyond Cryptocurrencies",
          excerpt:
            "Enterprise use cases of blockchain in supply chain management, smart contracts, and document traceability.",
          category: "blockchain",
          image: "/blockchain-enterprise-smart-contracts.jpg",
          date: "2024-11-05",
          readingTime: 10,
          tags: ["Blockchain", "Smart Contracts", "Enterprise", "Web3"],
        },
        {
          id: 4,
          title: "ITIL v4: Service Management in the Digital Era",
          excerpt:
            "How ITIL v4 adapts to agile methodologies and DevOps to improve IT service management in modern organizations.",
          category: "projectManagement",
          image: "/itil-service-management-digital.jpg",
          date: "2024-10-28",
          readingTime: 7,
          tags: ["ITIL", "Service Management", "DevOps", "Processes"],
        },
        {
          id: 5,
          title: "Generative AI in Software Development",
          excerpt:
            "Exploring the impact of ChatGPT, GitHub Copilot and other AI tools on software development and developer productivity.",
          category: "development",
          image: "/ai-software-development-coding.jpg",
          date: "2024-10-20",
          readingTime: 9,
          tags: ["AI", "ChatGPT", "Development", "Productivity"],
        },
        {
          id: 6,
          title: "ECM Document Management with FileNet P8",
          excerpt:
            "Best practices for implementing enterprise document management solutions with IBM FileNet P8, from architecture to operations.",
          category: "technology",
          image: "/document-management-enterprise-ecm.jpg",
          date: "2024-10-15",
          readingTime: 11,
          tags: ["ECM", "FileNet", "Document Management", "IBM"],
        },
        {
          id: 7,
          title: "Azure DevOps: CI/CD Pipeline for .NET",
          excerpt:
            "Complete guide to configure continuous integration and deployment pipelines in Azure DevOps for .NET Core and ASP.NET applications.",
          category: "development",
          image: "/azure-devops-pipeline-cicd.jpg",
          date: "2024-10-08",
          readingTime: 12,
          tags: ["Azure DevOps", "CI/CD", ".NET", "Automation"],
        },
        {
          id: 8,
          title: "Digital Transformation: From Theory to Practice",
          excerpt:
            "Real experiences leading digital transformation projects in the public sector, including process automation and paperless policies.",
          category: "projectManagement",
          image: "/digital-transformation-business-process.jpg",
          date: "2024-09-30",
          readingTime: 10,
          tags: ["Digital Transformation", "BPM", "Automation", "Government"],
        },
        {
          id: 9,
          title: "Clean Architecture in Enterprise Applications",
          excerpt:
            "Implementing Clean Architecture and Domain-Driven Design principles in enterprise projects with .NET and Java.",
          category: "architecture",
          image: "/clean-architecture-software-design.jpg",
          date: "2024-09-22",
          readingTime: 13,
          tags: ["Clean Architecture", "DDD", "Design Patterns", "Enterprise"],
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Have a project in mind? Let's talk",
      form: {
        name: "Full name",
        namePlaceholder: "Your name",
        email: "Email address",
        emailPlaceholder: "your@email.com",
        subject: "Subject",
        subjectPlaceholder: "What would you like to talk about?",
        message: "Message",
        messagePlaceholder: "Tell me about your project or idea...",
        submit: "Send message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Error sending message. Please try again.",
      },
      info: {
        title: "Contact information",
        description:
          "I'm available to collaborate on digital transformation projects, solution architecture, and IT project management.",
        location: "Bogotá, Colombia",
        availability: "Available for remote and hybrid projects",
      },
    },
  },
}
