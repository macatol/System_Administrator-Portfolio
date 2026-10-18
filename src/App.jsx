import React, { useEffect, useState } from "react";

const navigation = [
  ["Home", "home"],
  ["Career path", "pathway"],
  ["Skills", "skills"],
  ["Job roles", "roles"],
  ["Toolkit", "toolkit"],
  ["About", "about"],
  ["Conclusion", "conclusion"],
];

const pathways = [
  {
    number: "01",
    level: "LEVEL 1",
    roleType: "ENTRY-LEVEL",
    title: <>IT Support<br />Technician</>,
    description:
      "An IT Support Technician helps users with basic computer problems and provides first-line technical assistance.",
    responsibilities:
      "Install basic software, help fix computer problems, and assist users with technical issues.",
    experience: "Basic computer knowledge, communication skills, and basic troubleshooting.",
    tags: ["Help desk", "Entry-level"],
    icon: (
      <>
        <path d="M16 4a6 6 0 0 0-3.5 10.9A9 9 0 0 0 7 23v2h18v-2a9 9 0 0 0-5.5-8.1A6 6 0 0 0 16 4Z" />
        <path d="M12 22h8M12.5 26v2m7-2v2" />
      </>
    ),
  },
  {
    number: "02",
    level: "LEVEL 2",
    roleType: "INTERMEDIATE",
    title: <>Junior System<br />Administrator</>,
    description:
      "A Junior System Administrator helps manage computer systems and networks.",
    responsibilities:
      "Manage user accounts, check system updates, and help maintain computers and servers.",
    experience: "Basic networking, operating system knowledge, and system maintenance.",
    tags: ["Systems", "Growing experience"],
    icon: (
      <>
        <rect x="5" y="5" width="22" height="9" rx="2" />
        <rect x="5" y="18" width="22" height="9" rx="2" />
        <path d="M9 9.5h.1M13 9.5h.1m-4.1 13h.1m3.9 0h.1" />
      </>
    ),
  },
  {
    number: "03",
    level: "LEVEL 3",
    roleType: "ADVANCED",
    title: <>Senior System<br />Administrator</>,
    description:
      "A Senior System Administrator manages and maintains important IT systems.",
    responsibilities:
      "Monitor computer systems and servers, improve system security, and solve technical problems.",
    experience: "Troubleshooting, security knowledge, basic scripting knowledge, and work experience.",
    tags: ["Infrastructure", "Experienced"],
    featured: true,
    icon: (
      <>
        <path d="M16 4 27 10v12l-11 6-11-6V10l11-6Z" />
        <path d="m5.5 10 10.5 6 10.5-6M16 16v12m-5-21 10 6" />
      </>
    ),
  },
];

const skills = [
  ["Computer basics", "Knowing how to use a computer and basic applications is important for everyday IT tasks."],
  ["Basic networking", "Learning about IP addresses, Wi-Fi, and network connections helps explain how devices communicate."],
  ["Troubleshooting", "Finding and fixing common computer problems is a practical foundation for IT support."],
  ["Operating systems", "Basic Windows knowledge helps with managing files, applications, and computer settings."],
  ["Basic cybersecurity", "Strong passwords, safe browsing, and protecting files help keep computers and information safer."],
  ["Communication & teamwork", "Working with classmates and asking questions helps solve problems and learn from others."],
];

const jobRoles = [
  {
    title: "IT Support Technician",
    color: "blue",
    focus: "People & endpoints",
    responsibility: "Solve user issues, provision devices, and manage service requests.",
    fit: "Like helping people and learning by solving varied problems.",
  },
  {
    title: "System Administrator",
    color: "orange",
    focus: "Systems & reliability",
    responsibility: "Maintain servers, identities, backups, updates, and secure access.",
    fit: "Enjoy making complex systems stable, secure, and dependable.",
  },
  {
    title: "Network Administrator",
    color: "violet",
    focus: "Computer networks",
    responsibility: "Maintain network connections and check that the network works properly.",
    fit: "Enjoy understanding connections and keeping networks available.",
  },
];

const tools = [
  {
    glyph: "⊞",
    color: "blue",
    category: "OPERATING SYSTEM",
    name: "Microsoft Windows",
    description: "Use Windows to manage files, install applications, and change computer settings.",
    label: "DAILY USE",
  },
  {
    glyph: "◎",
    color: "orange",
    category: "WEB BROWSER",
    name: "Google Chrome",
    description: "Search for information, study IT topics, and access websites.",
    label: "RESEARCH",
  },
  {
    glyph: "▤",
    color: "violet",
    category: "PRODUCTIVITY",
    name: "Microsoft Word",
    description: "Create documents, reports, and school projects.",
    label: "DOCUMENTS",
  },
  {
    glyph: "</>",
    color: "green",
    category: "CODE EDITOR",
    name: "Visual Studio Code",
    description: "Write and edit basic HTML, CSS, and JavaScript code.",
    label: "LEARNING TO CODE",
  },
  {
    glyph: ">_",
    color: "orange",
    category: "COMMAND LINE",
    name: "Command Prompt (CMD)",
    description: "Use basic commands to check network information and troubleshoot simple computer problems.",
    label: "COMMANDS",
  },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 36 36" fill="none">
        <rect x="3" y="4" width="30" height="28" rx="9" fill="currentColor" />
        <path d="M11 13h14M11 18h14M11 23h8" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="26" cy="24" r="2.2" fill="#F78A36" />
      </svg>
    </span>
  );
}

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? " footer-brand" : ""}`} href="#home" aria-label="Career Pathways home">
      <BrandMark />
      <span>Career<span className="brand-light">Pathways</span></span>
    </a>
  );
}

function Header({ activeSection, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <Brand />
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-nav"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="sr-only">Toggle navigation</span>
        <span></span><span></span>
      </button>
      <nav className={`primary-nav${menuOpen ? " is-open" : ""}`} id="primary-nav" aria-label="Main navigation">
        {navigation.map(([label, id]) => (
          <a
            className={`nav-link${activeSection === id ? " is-active" : ""}`}
            href={`#${id}`}
            key={id}
            aria-current={activeSection === id ? "location" : undefined}
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#pathway">Explore the path <span aria-hidden="true">↗</span></a>
      <button
        className="theme-toggle"
        type="button"
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        aria-pressed={theme === "dark"}
        title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {theme === "light" ? (
            <>
              <path d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z" />
              <path d="M16 3v3m1.5-1.5h-3" />
            </>
          ) : (
            <>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
            </>
          )}
        </svg>
        <span>{theme === "light" ? "Dark mode" : "Light mode"}</span>
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot"></span> Welcome to my System Administrator Career Portfolio</p>
        <h1 id="hero-title">Keep the<br />digital world<br /><span>running.</span></h1>
        <p className="hero-intro">
          This portfolio explores the career path of a System Administrator,
          including IT roles, their responsibilities, and the skills needed to
          grow. As a BSIT student, I want to learn more about computers,
          networking, and troubleshooting as I prepare for a career in IT.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#pathway">Explore career paths <span aria-hidden="true">→</span></a>
          <a className="text-link" href="#skills">Discover the skills <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-facts" aria-label="Portfolio highlights">
          <div><strong>03</strong><span>career levels</span></div>
          <span className="fact-divider" aria-hidden="true"></span>
          <div><strong>06</strong><span>core skills</span></div>
          <span className="fact-divider" aria-hidden="true"></span>
          <div><strong>∞</strong><span>room to grow</span></div>
        </div>
      </div>
      <div className="hero-art" aria-label="Illustration of connected systems and a server dashboard">
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>
        <span className="orbit-node node-one"></span>
        <span className="orbit-node node-two"></span>
        <span className="orbit-node node-three"></span>
        <div className="floating-label label-top"><span className="mini-pulse"></span> SYSTEMS ONLINE</div>
        <div className="server-card">
          <div className="server-top">
            <span className="window-dots"><i></i><i></i><i></i></span>
            <span className="mono">infra_status.exe</span>
            <span className="server-menu">···</span>
          </div>
          <div className="server-body">
            <div className="server-heading">
              <div><span className="mono muted-label">LIVE OVERVIEW</span><h2>Infrastructure</h2></div>
              <span className="online-badge"><i></i> Healthy</span>
            </div>
            <div className="metric-grid">
              <div className="metric">
                <span className="metric-label">UPTIME</span>
                <strong>99.98<span>%</span></strong>
                <div className="sparkline spark-blue">{Array.from({ length: 9 }, (_, index) => <i key={index}></i>)}</div>
              </div>
              <div className="metric">
                <span className="metric-label">ACTIVE NODES</span>
                <strong>248<span className="metric-unit"> / 250</span></strong>
                <div className="node-meter"><i></i></div>
              </div>
            </div>
            <div className="server-list">
              <div><span className="server-icon">▤</span><span><b>Core services</b><small>12 services running</small></span><span className="service-state">Operational</span></div>
              <div><span className="server-icon orange">⌘</span><span><b>Network security</b><small>Last scan · 2 min ago</small></span><span className="service-state">Protected</span></div>
            </div>
          </div>
        </div>
        <div className="floating-label label-bottom"><span className="terminal-prompt">&gt;_</span> Building what’s next</div>
        <div className="hero-illustration-note mono">FIG 01 &nbsp; / &nbsp; THE SYSTEMS THINKER</div>
      </div>
      <a className="scroll-cue" href="#pathway"><span></span> SCROLL TO EXPLORE</a>
    </section>
  );
}

function PathwaySection() {
  return (
    <section className="pathway-section section-pad" id="pathway" aria-labelledby="pathway-title">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="section-index">01 /</span> YOUR CAREER, IN LAYERS</p>
            <h2 id="pathway-title">A path with<br className="mobile-break" /> <span>room to grow.</span></h2>
          </div>
          <p className="section-summary">There’s no single route into systems work. Build practical experience, stay curious, and grow from supporting users to shaping the infrastructure everyone depends on.</p>
        </div>
        <div className="pathway-line" aria-label="Three levels in a system administration career">
          {pathways.map((path) => (
            <article className={`path-card${path.featured ? " path-card-featured" : ""}`} key={path.number}>
              <div className="path-card-top"><span className="path-number">{path.number}</span><span className="path-level">{path.level}</span></div>
              <div className={`path-icon icon-${path.number === "01" ? "blue" : path.number === "02" ? "violet" : path.number === "03" ? "orange" : "green"}`} aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{path.icon}</svg>
              </div>
              <p className="role-type">{path.roleType}</p>
              <h3>{path.title}</h3>
              <p className="path-description">{path.description}</p>
              <div className="path-detail"><h4>On the job</h4><p>{path.responsibilities}</p></div>
              <div className="path-detail"><h4>Build your foundation</h4><p>{path.experience}</p></div>
              <div className="path-tags">{path.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
        <p className="pathway-footnote"><span aria-hidden="true">✳</span> My career goal is to start as an IT Support Technician, gain experience as a Junior System Administrator, and work toward becoming a Senior System Administrator.</p>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="skills-section section-pad" id="skills" aria-labelledby="skills-title">
      <div className="section-wrap skills-layout">
        <div className="skills-intro">
          <p className="eyebrow"><span className="section-index">02 /</span> INVEST IN YOURSELF</p>
          <h2 id="skills-title">The skills<br />behind the <span>systems.</span></h2>
          <p>These are the IT skills I am learning and building as a student. Each one helps prepare me to solve real technical problems.</p>
          <a className="text-link" href="#toolkit">See the tools that put them to work <span aria-hidden="true">→</span></a>
          <div className="skills-decoration" aria-hidden="true">
            <span className="deco-circle"></span><span className="deco-cross">✳</span><span className="deco-line"></span>
            <span className="deco-caption mono">ALWAYS LEARNING / ALWAYS IMPROVING</span>
          </div>
        </div>
        <div className="skill-list">
          {skills.map(([title, description], index) => (
            <article className="skill-item" key={title}>
              <span className="skill-count">{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
              <span className="skill-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RolesSection() {
  return (
    <section className="roles-section section-pad" id="roles" aria-labelledby="roles-title">
      <div className="section-wrap">
        <div className="section-heading roles-heading">
          <div>
            <p className="eyebrow"><span className="section-index">03 /</span> DIFFERENT ROLES, SHARED PURPOSE</p>
            <h2 id="roles-title">Three roles.<br /><span>One IT journey.</span></h2>
          </div>
          <p className="section-summary">These jobs are related to IT, but their responsibilities differ. IT Support helps users, System Administrators manage systems, and Network Administrators maintain networks.</p>
        </div>
        <div className="role-table" role="table" aria-label="Comparison of system administration related job roles">
          <div className="role-row role-header" role="row"><span role="columnheader">ROLE</span><span role="columnheader">MAIN FOCUS</span><span role="columnheader">DAY-TO-DAY RESPONSIBILITY</span><span role="columnheader">GOOD FIT IF YOU…</span></div>
          {jobRoles.map((role) => (
            <div className="role-row" role="row" key={role.title}>
              <span className="role-cell role-title" role="cell"><span className={`role-dot dot-${role.color}`}></span>{role.title}</span>
              <span className="role-cell" role="cell">{role.focus}</span>
              <span className="role-cell" role="cell">{role.responsibility}</span>
              <span className="role-cell" role="cell">{role.fit}</span>
            </div>
          ))}
        </div>
        <p className="role-note"><span aria-hidden="true">↳</span> In smaller teams, one person may cover all three. In larger teams, responsibilities often specialize.</p>
      </div>
    </section>
  );
}

function ToolkitSection() {
  return (
    <section className="toolkit-section section-pad" id="toolkit" aria-labelledby="toolkit-title">
      <div className="section-wrap">
        <div className="toolkit-top">
          <div>
            <p className="eyebrow"><span className="section-index">04 /</span> TOOLS I USE AND LEARN</p>
            <h2 id="toolkit-title">Everyday tools.<br /><span>Practical skills.</span></h2>
          </div>
          <p className="section-summary">These tools support my studies, daily computer tasks, research, and practice with basic coding and troubleshooting.</p>
        </div>
        <div className="tool-grid">
          {tools.map((tool) => (
            <article className="tool-card" key={tool.name}>
              <div className="tool-card-head"><span className={`tool-glyph glyph-${tool.color}`}>{tool.glyph}</span><span className="tool-category">{tool.category}</span></div>
              <h3>{tool.name}</h3><p>{tool.description}</p><span className="tool-label">{tool.label}</span>
            </article>
          ))}
        </div>
        <div className="toolkit-bottom"><span className="mono">KEEP PRACTICING</span><p>I use these tools while studying and will keep learning through practice and experience.</p><span className="toolkit-arrow" aria-hidden="true">↗</span></div>
      </div>
    </section>
  );
}

function DeveloperSection() {
  return (
    <section className="about-section section-pad" id="about" aria-labelledby="about-title">
      <div className="section-wrap about-card">
        <div className="about-visual" aria-hidden="true">
          <div className="about-grid"></div>
          <div className="avatar-frame">
            <svg className="avatar-art" viewBox="0 0 240 260">
              <rect x="15" y="15" width="210" height="230" rx="105" fill="#DCE6FA" />
              <path d="M46 244c8-47 35-70 74-70s67 23 75 70" fill="#152B60" />
              <path d="M91 169v-31h59v31c0 16-13 29-29 29s-30-13-30-29Z" fill="#D98D66" />
              <path d="M77 99c0-35 18-57 45-57 33 0 48 23 48 58v25c0 31-21 55-49 55-26 0-44-23-44-55V99Z" fill="#E9A47C" />
              <path d="M73 101c-4-40 14-69 50-69 39 0 58 26 54 67-9-6-18-18-21-29-19 12-43 18-76 16l-7 15Z" fill="#26334A" />
              <path d="M90 109c8-4 16-4 23 0m22 0c8-4 16-4 23 0" stroke="#4B342E" strokeWidth="3" strokeLinecap="round" />
              <circle cx="101" cy="119" r="3.5" fill="#26334A" /><circle cx="145" cy="119" r="3.5" fill="#26334A" />
              <path d="M111 147c7 5 16 5 23 0" stroke="#A44F4A" strokeWidth="3" strokeLinecap="round" />
              <path d="M69 243c6-32 26-49 51-49s45 17 51 49" fill="#F5F7FB" />
              <path d="m102 198 18 18 18-18" fill="#F78A36" /><path d="m120 216-11 28h22l-11-28Z" fill="#152B60" />
            </svg>
          </div>
          <span className="about-stamp mono">CURIOUS BY DEFAULT <b>✳</b></span>
          <span className="about-side-note mono">THE PERSON BEHIND THE PATH</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow"><span className="section-index">05 /</span> A LITTLE ABOUT ME</p>
          <h2 id="about-title">Hello, I'm<br /><span>Joshua M. Macatol.</span></h2>
          <p className="about-lead">Hi! I am a BS Information Technology student interested in computers, networking, and technology.</p>
          <p className="about-body">I have basic IT skills and still have many things to learn. I want to improve my knowledge through practice and experience. My preferred career path is System Administration, where I hope to learn how to manage computer systems and networks.</p>
          <div className="about-details">
            <div><span className="detail-label">STUDYING</span><strong>Bachelor of Science in Information Technology (BSIT)</strong></div>
            <div><span className="detail-label">CAREER DIRECTION</span><strong>System Administrator</strong></div>
            <div><span className="detail-label">EMAIL</span><a href="mailto:macatoljoshua24@gmail.com">macatoljoshua24@gmail.com</a></div>
            <div><span className="detail-label">CONTACT NUMBER</span><a href="tel:+639551826311">09551826311</a></div>
          </div>
          <div className="about-goal"><span className="goal-icon" aria-hidden="true">↗</span><p><strong>My professional goal</strong><br />Become a skilled IT professional and learn how to manage computer systems and networks in the future.</p></div>
        </div>
      </div>
    </section>
  );
}

function ConclusionSection() {
  return (
    <section className="conclusion-section section-pad" id="conclusion" aria-labelledby="conclusion-title">
      <div className="section-wrap conclusion-card">
        <p className="eyebrow"><span className="section-index">06 /</span> LOOKING AHEAD</p>
        <h2 id="conclusion-title">A career built<br />one step at a <span>time.</span></h2>
        <p>System Administration offers many opportunities in the IT industry. A person can begin as an IT Support Technician and move to higher positions by learning new skills and gaining experience.</p>
        <p>As an IT student, I know I still have more to learn. I will continue to practice, improve my skills, and prepare for my future career.</p>
        <a className="button button-primary" href="#home">Back to the beginning <span aria-hidden="true">↑</span></a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-inner">
        <Brand footer />
        <p>A field guide to the systems that keep us connected.</p>
        <a className="back-to-top" href="#home">Back to top <span aria-hidden="true">↑</span></a>
        <span className="footer-credit mono">BUILT WITH CURIOSITY © <span>{new Date().getFullYear()}</span></span>
      </div>
    </footer>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    return savedTheme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      theme === "dark" ? "#101827" : "#f8f9fc",
    );
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={() => setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light")}
      />
      <main id="main">
        <Hero />
        <PathwaySection />
        <SkillsSection />
        <RolesSection />
        <ToolkitSection />
        <DeveloperSection />
        <ConclusionSection />
      </main>
      <Footer />
    </>
  );
}
