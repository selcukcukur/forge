
const experiences = [
  {
    rank      : 9,
    company   : "Sirketio",
    location  : "İstanbul, Türkiye",
    type      : "self-employed",
    period    : "Jul 2024 – Present · 1 year 9 months",
    summary   : "Comprehensive platform for company management, integrating legal, technical, and operational frameworks.",
    positions : [
      {
        id      : 1,
        title   : "Founder",
        period  : {
          start : "Jul, 2024",
          end   : "Present",
          total : "1 year 9 months"
        },
        summary : "Sirketio is a comprehensive platform designed to simplify and enhance every aspect of company management. From company formation to brand registration, from tracking financial transactions to managing human resources processes and meeting software needs, it provides end-to-end solutions With advanced tools and consulting support in accounting and digital transformation, it enables businesses to operate in line with modern standards—transparent, sustainable, and efficient. By integrating legal, technical, and operational frameworks, Sirketio allows companies to focus on growth and innovation while reducing the complexity of daily operations As the founder, I defined the product vision, designed the brand identity and logo, shaped the technical architecture, and managed the continuous development of the platform. Sirketio is not only a software solution, but also an ecosystem that makes the future of businesses more secure, efficient, and innovative.",
        skills  : []
      }
    ]
  },
  {
    rank      : 8,
    company   : "Whmio",
    location  : "İstanbul, Türkiye",
    type      : "full-time",
    period    : "Apr 2025 – Jan 2026 · 10 months",
    summary   : "AI-powered hosting automation solutions.",
    positions : [
      {
        id      : 1,
        title   : "Founder",
        period  : {
          start : "Apr, 2025",
          end   : "Jan, 2026",
          total : "10 months"
        },
        summary : "Defined product vision, shaped brand identity, designed technical infrastructure, and managed continuous development.",
        skills  : []
      }
    ]
  },
  {
    rank      : 7,
    company   : "Ticihub",
    location  : "İstanbul, Türkiye",
    type      : "full-time",
    period    : "Apr 2025 – Jan 2026 · 10 months",
    summary   : "AI-powered e-commerce ecosystem solutions.",
    positions : [
      {
        id      : 1,
        title   : "Founder",
        period  : {
          start : "Apr, 2025",
          end   : "Jan, 2026",
          total : "10 months"
        },
        summary : "Defined product vision, shaped brand identity, directed technical development.",
        skills  : ["System Design", "Next.js"]
      }
    ]
  },
  {
    id        : 6,
    company   : "Poox",
    location  : "İstanbul, Türkiye",
    type      : "full-time",
    period    : "Mar 2025 – Jan 2026 · 11 months",
    summary   : "Developer library with UI components.",
    positions : [
      {
        id      : 1,
        title   : "Founder",
        period  : {
          start : "Mar, 2025",
          end   : "Jan, 2026",
          total : "11 months"
        },
        summary : "Defined product vision, led brand identity and logo design process.",
        skills  : ["System Design", "Next.js"]
      }
    ]
  },
  {
    id        : 5,
    company   : "Srylius",
    location  : "İstanbul, Türkiye",
    type      : "self-employed",
    period    : "Aug 2023 – Jan 2026 · 2 years 6 months",
    summary   : "Infrastructure and service assurance across technology.",
    positions : [
      {
        id      : 1,
        title   : "Founder",
        period  : {
          start : "Aug, 2023",
          end   : "Jan, 2026",
          total : "2 years 6 months"
        },
        summary : "Defined product vision, designed brand identity and logo, shaped technical infrastructure, and managed continuous development.",
        skills  : ["System Design", "Windows Server"]
      }
    ]
  },
  {
    id        : 4,
    company   : "Freelancer.com",
    location  : "İstanbul, Türkiye",
    type      : "part-time",
    period    : "Jan 2015 – Dec 2022 · 8 years",
    summary   : "Payment systems, web apps, SEO, remote collaboration.",
    positions : [
      {
        id      : 1,
        title   : "Senior Software Engineer",
        period  : {
          start : "Jan, 2015",
          end   : "Dec, 2022",
          total : "8 years"
        },
        summary : "Worked on payment systems, websites, plugins, SEO, database optimization, and desktop programs.",
        skills  : ["Backend Web Development", "Engineering"]
      }
    ]
  },
  {
    id        : 3,
    company   : "Digital Talent Agency",
    location  : "Catalonia, Spain",
    type      : "full-time",
    period    : "Nov 2019 – Nov 2021 · 2 years 1 month",
    summary   : "Web apps, Laravel, security, database optimization.",
    positions : [
      {
        id      : 2,
        title   : "Senior Lead Software Engineer",
        period  : { start: "Sep, 2020", end: "Nov, 2021", total: "1 year 3 months" },
        summary : "Led multiple projects, security audits, database schema design and optimization.",
        skills  : ["Information Security Management", "jQuery"]
      },
      {
        id      : 1,
        title   : "Senior PHP Developer",
        period  : { start: "Nov, 2019", end: "Sep, 2020", total: "11 months" },
        summary : "Developed with PHP libraries including CodeIgniter, Symfony, Laravel.",
        skills  : ["Information Security Management", "jQuery"]
      }
    ]
  },
  {
    id        : 2,
    company   : "Mgame",
    location  : "Seoul, South Korea",
    type      : "full-time",
    period    : "Apr 2018 – Nov 2019 · 1 year 8 months",
    summary   : "Game development, server security, event design.",
    positions : [
      {
        id      : 3,
        title   : "Senior Software Engineer",
        period  : { start: "Oct, 2018", end: "Nov, 2019", total: "1 year 2 months" },
        summary : "Handled server security, in-game events, database management and optimization.",
        skills  : ["C#", "Information Security Management"]
      },
      {
        id      : 2,
        title   : "Middle Software Engineer",
        period  : { start: "Jun, 2018", end: "Oct, 2018", total: "5 months" },
        summary : "Worked on game engine development, 3D modeling, web-based solutions, server maintenance.",
        skills  : ["C#", "Information Security Management"]
      },
      {
        id      : 1,
        title   : "Junior Software Engineer",
        period  : { start: "Apr, 2018", end: "Jun, 2018", total: "3 months" },
        summary : "Contributed to RPGs, web games, scenario design, engine optimization, visual modeling.",
        skills  : ["C#", "SEO"]
      }
    ]
  },
  {
    id        : 1,
    avatar    : "https://media.licdn.com/dms/image/v2/C560BAQGMZBxranD3Tw/company-logo_100_100/company-logo_100_100/0/1631312717167?e=1775692800&v=beta&t=lFEjR4KCoH-J8ly_3b8jro_oeL3kkfdHMeRiCOkye0E",
    company   : "Soft Group Ukraine",
    target    : "https://soft-group.com/",
    profile   : "https://www.linkedin.com/company/soft-group-ukraine/",
    location  : "Ukraine",
    type      : "full-time",
    period    : "Jan 2016 – Apr 2018 · 2 years 4 months",
    summary   : "Web apps, desktop programs, mobile solutions.",
    positions : [
      {
        rank    : 3,
        title   : "Senior Lead Software Engineer",
        period  : { start: "Aug, 2017", end: "Apr, 2018", total: "9 months" },
        summary : "I took an active end-to-end role in planning the development process of projects related to web-based applications, special desktop programs and mobile application solutions, ensuring active role distribution, making sustainability analyzes of the project and putting the projects into publication",
        skills  : []
      },
      {
        rank    : 2,
        title   : "Middle Software Engineer",
        period  : { start: "Jun, 2016", end: "Aug, 2017", total: "1 year 3 months" },
        summary : "Development and preparation of a project that offers a wide range of solutions for the integration of structured cabling systems, development and preparation of the software of the Cornell University platform, which allows to invite users to edx special courses and offers self-paced training programs, consulting and technical support and a wide range of training and learning kits I took an active role in the development and preparation of the platform that brings together distinguished professionals, instructors, speakers and curriculum designers and students to provide",
        skills  : []
      },
      {
        rank    : 1,
        title   : "Junior Software Engineer",
        period  : { start: "Jan, 2016", end: "Jun, 2016", total: "6 months" },
        summary : "During my junior year, I took an active part in the development processes of the microservice platform that provides users with an interface to make payments, deposits and conversions using \"Onpex/Clearbank\" and services that facilitate workflows and collaboration between manufacturers, wholesalers and retailers.",
        skills  : []
      }
    ]
  }
]
