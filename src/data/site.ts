/* ==================================================================
 *  VGEC ROBOTICS CLUB — SINGLE SOURCE OF TRUTH
 * ------------------------------------------------------------------
 *  Everything on the website is driven by this file.
 *  To update the site, edit the data below — you never need to touch
 *  the components. To swap images, drop files in /public and point the
 *  paths here (e.g. "/images/team/alex.jpg"). Placeholder images use
 *  picsum.photos so the layout looks real before you add your own.
 * ================================================================== */

export type NavItem = { id: string; label: string };

export type Social = {
  label: string;
  href: string;
  icon: "instagram" | "linkedin" | "github" | "youtube" | "twitter" | "facebook";
};

export type Stat = { value: string; label: string };

export type Domain = {
  /* icon = any lucide-react icon name mapped in Domains.tsx */
  icon: string;
  title: string;
  description: string;
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  status: "Active" | "Completed" | "In R&D";
};

export type Team = {
  name: string;
  competition: string;
  description: string;
  achievement: string;
};

export type Member = {
  name: string;
  role: string;
  image: string;
  socials?: Social[];
};

export type Mentor = {
  name: string;
  title: string;
  department: string;
  image: string;
};

export type Achievement = {
  year: string;
  title: string;
  detail: string;
};

export type EventItem = {
  date: string; // e.g. "MAR 2026"
  title: string;
  type: string; // Workshop / Competition / Talk
  description: string;
};

export type Sponsor = {
  name: string;
  tier: "Platinum" | "Gold" | "Silver" | "Community";
  logo: string;
};

export type GalleryImage = { src: string; caption: string };

/* helper for realistic placeholder imagery (deterministic per seed) */
const img = (seed: string, w = 800, h = 600) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const site = {
  /* ---------- identity ---------- */
  club: {
    name: "IRIS Robotics Club VGEC",
    shortName: "IRIS",
    college: "Vishwakarma Government Engineering College",
    tagline: "We Build Machines That Think.",
    heroSubtitle:
      "The official robotics club of VGEC — designing autonomous systems, competition robots, and the engineers who build them.",
    established: "2025",
    email: "iris.robotics.club@gmail.com",
    phone: "+91 7203936187",
    location: "Chandkheda, Ahmedabad, Gujarat",
    // BASE_URL keeps the logo path correct at any deploy sub-path
    logo: `${import.meta.env.BASE_URL}favicon.svg`,
  },

  /* ---------- navigation (drives the navbar + smooth scroll) ---------- */
  nav: [
    { id: "about", label: "About" },
    { id: "domains", label: "Domains" },
    { id: "projects", label: "Projects" },
    { id: "teams", label: "Teams" },
    { id: "gallery", label: "Gallery" },
    { id: "members", label: "Team" },
    { id: "achievements", label: "Wins" },
    { id: "events", label: "Events" },
    { id: "sponsors", label: "Sponsors" },
    { id: "contact", label: "Contact" },
  ] as NavItem[],

  socials: [
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "GitHub", href: "#", icon: "github" },
    { label: "YouTube", href: "#", icon: "youtube" },
    { label: "Twitter", href: "#", icon: "twitter" },
  ] as Social[],

  /* ---------- hero stats ---------- */
  

  /* ---------- about ---------- */
  about: {
    heading: "Engineering the autonomous future",
    body: [
      "IRIS Robotics Club VGEC is a student-run engineering community where curiosity turns into hardware. We bring together builders across mechanical, electronics, and software disciplines to design robots that solve real problems.",
      "From line-followers to autonomous rovers,  — we learn by building. No experience required, only the will to make things move.",
    ],
    mission:
      "To make hands-on robotics accessible to every VGEC student and to compete with the best teams in the country.",
    vision:
      "A platform where every idea can become a working machine, and every member graduates as a builder.",
  },

  /* ---------- domains / focus areas ---------- */
  domains: [
    
    {
      icon: "Cpu",
      title: "Embedded Systems",
      description:
        "Microcontrollers, sensors, and real-time firmware — the low-level brains behind every build.",
    },
    {
      icon: "Cog",
      title: "Mechanical Design",
      description:
        "CAD, fabrication, and mechanisms engineered for strength, speed, and precision.",
    },
    {
      icon: "Bot",
      title: "Software Systems",
      description:
        "Computer vision, path planning, and reinforcement learning that let our robots perceive and decide. Robot Operating System pipelines for navigation, SLAM, and multi-robot coordination.",
    },
    
    
  ] as Domain[],

  /* ---------- projects ---------- */
  projects: [
    {
      name: "Atlas Rover",
      tagline: "Autonomous terrain explorer",
      description:
        "A six-wheel rover with LiDAR mapping and vision-based obstacle avoidance, built for autonomous navigation challenges.",
      image: img("atlas-rover"),
      tags: ["ROS2", "LiDAR", "Computer Vision"],
      status: "Active",
    },
    {
      name: "Vortex Drone",
      tagline: "Vision-guided quadcopter",
      description:
        "A custom flight controller and onboard camera stack enabling autonomous waypoint flight and object tracking.",
      image: img("vortex-drone"),
      tags: ["Flight Control", "PX4", "Tracking"],
      status: "In R&D",
    },
    {
      name: "GripBot Arm",
      tagline: "5-DOF robotic manipulator",
      description:
        "A precision robotic arm with inverse-kinematics control and a modular gripper for pick-and-place tasks.",
      image: img("gripbot-arm"),
      tags: ["Kinematics", "Servos", "CAD"],
      status: "Completed",
    },
    {
      name: "LineHawk",
      tagline: "High-speed line follower",
      description:
        "A PID-tuned line-following robot that has topped multiple inter-college speed competitions.",
      image: img("linehawk"),
      tags: ["PID", "Sensors", "Embedded"],
      status: "Completed",
    },
    {
      name: "SwarmNet",
      tagline: "Coordinated robot swarm",
      description:
        "A fleet of small robots communicating over a mesh network to perform collaborative formation tasks.",
      image: img("swarmnet"),
      tags: ["Swarm", "Mesh", "IoT"],
      status: "In R&D",
    },
    {
      name: "EchoBot",
      tagline: "Voice-controlled assistant bot",
      description:
        "An interactive desk robot with speech recognition, expressive LEDs, and a personality of its own.",
      image: img("echobot"),
      tags: ["NLP", "Audio", "HRI"],
      status: "Active",
    },
  ] as Project[],

  /* ---------- competition teams ---------- */
  teams: [
    {
      name: "Team Robocon",
      competition: "DD/ABU Robocon",
      description:
        "Our flagship team designing and fabricating large-scale robots for the national Robocon championship.",
      achievement: "National Finalists 2024",
    },
    {
      name: "Team AutoNav",
      competition: "e-Yantra Robotics",
      description:
        "Focused on autonomous navigation and embedded challenges hosted by IIT Bombay's e-Yantra initiative.",
      achievement: "Top 10 Nationally",
    },
    {
      name: "Team Combat",
      competition: "RoboWars / BattleBots",
      description:
        "Designing rugged combat robots engineered to take a hit and keep fighting in the arena.",
      achievement: "Regional Champions",
    },
    {
      name: "Team Vision",
      competition: "Smart India Hackathon",
      description:
        "Building robotics + AI solutions for real-world problem statements at national hackathons.",
      achievement: "Grand Finale Winners",
    },
  ] as Team[],

  /* ---------- gallery ---------- */
  gallery: [
    { src: img("gal-lab", 900, 900), caption: "In the lab" },
    { src: img("gal-build", 900, 700), caption: "Build night" },
    { src: img("gal-comp", 900, 1100), caption: "Competition day" },
    { src: img("gal-drone", 900, 700), caption: "Drone testing" },
    { src: img("gal-team", 900, 900), caption: "The crew" },
    { src: img("gal-solder", 900, 1100), caption: "Soldering session" },
    { src: img("gal-workshop", 900, 700), caption: "Workshop" },
    { src: img("gal-trophy", 900, 900), caption: "Trophy haul" },
  ] as GalleryImage[],

  /* ---------- core team members ---------- */
  members: [
    { name: "Aarav Sharma", role: "President", image: img("m-aarav", 500, 500) },
    { name: "Diya Patel", role: "Vice President", image: img("m-diya", 500, 500) },
    { name: "Rohan Mehta", role: "Technical Lead", image: img("m-rohan", 500, 500) },
    { name: "Isha Desai", role: "Software Lead", image: img("m-isha", 500, 500) },
    { name: "Karan Shah", role: "Mechanical Lead", image: img("m-karan", 500, 500) },
    { name: "Ananya Iyer", role: "Electronics Lead", image: img("m-ananya", 500, 500) },
    { name: "Vivaan Joshi", role: "Events Head", image: img("m-vivaan", 500, 500) },
    { name: "Sara Khan", role: "Design & Media", image: img("m-sara", 500, 500) },
  ] as Member[],

  /* ---------- faculty mentors ---------- */
  mentors: [
    {
      name: "Dr. R. K. Trivedi",
      title: "Faculty Advisor",
      department: "Dept. of Electronics & Communication",
      image: img("f-trivedi", 500, 500),
    },
    {
      name: "Prof. S. M. Patel",
      title: "Co-Advisor",
      department: "Dept. of Mechanical Engineering",
      image: img("f-patel", 500, 500),
    },
    {
      name: "Dr. N. A. Shah",
      title: "Mentor",
      department: "Dept. of Computer Engineering",
      image: img("f-shah", 500, 500),
    },
  ] as Mentor[],

  /* ---------- achievements timeline ---------- */
  achievements: [
    { year: "2024", title: "Robocon National Finalists", detail: "Placed in the top 8 teams nationwide at DD Robocon." },
    { year: "2023", title: "Smart India Hackathon Winners", detail: "Grand finale winners for an autonomous inspection robot." },
    { year: "2022", title: "e-Yantra Top 10", detail: "Ranked among the top 10 teams in IIT Bombay's e-Yantra." },
    { year: "2021", title: "RoboWars Regional Champions", detail: "Won the west-zone combat robotics championship." },
    { year: "2019", title: "Best Innovation Award", detail: "Recognised for the Atlas autonomous rover prototype." },
  ] as Achievement[],

  /* ---------- events & workshops ---------- */
  events: [
    {
      date: "MAR 2026",
      title: "RoboGenesis '26",
      type: "Flagship Fest",
      description: "Our annual robotics festival — competitions, exhibitions, and guest talks across two days.",
    },
    {
      date: "FEB 2026",
      title: "Intro to ROS2 Bootcamp",
      type: "Workshop",
      description: "A hands-on weekend building your first autonomous robot with ROS2 and simulation.",
    },
    {
      date: "JAN 2026",
      title: "PCB Design Masterclass",
      type: "Workshop",
      description: "From schematic to fabricated board — design your own custom electronics.",
    },
    {
      date: "NOV 2025",
      title: "AI in Robotics — Guest Talk",
      type: "Talk",
      description: "Industry experts on how modern AI is reshaping autonomous systems.",
    },
  ] as EventItem[],

  /* ---------- sponsors ---------- */
  sponsors: [
    { name: "TechNova", tier: "Platinum", logo: img("sp-technova", 300, 150) },
    { name: "CircuitLabs", tier: "Platinum", logo: img("sp-circuitlabs", 300, 150) },
    { name: "MechWorks", tier: "Gold", logo: img("sp-mechworks", 300, 150) },
    { name: "DroneX", tier: "Gold", logo: img("sp-dronex", 300, 150) },
    { name: "ByteForge", tier: "Silver", logo: img("sp-byteforge", 300, 150) },
    { name: "VoltEdge", tier: "Silver", logo: img("sp-voltedge", 300, 150) },
    { name: "MakerSpace", tier: "Community", logo: img("sp-makerspace", 300, 150) },
    { name: "OpenBotics", tier: "Community", logo: img("sp-openbotics", 300, 150) },
  ] as Sponsor[],

  /* ---------- join / recruitment ---------- */
  join: {
    heading: "Ready to build the future?",
    body: "We recruit every semester across all branches and years. No prior experience needed — just bring your curiosity. We'll teach you the rest.",
    perks: [
      "Hands-on access to our fully equipped robotics lab",
      "Mentorship from seniors and faculty experts",
      "Compete in national & international competitions",
      "Build a portfolio that gets you hired",
    ],
    ctaLabel: "Apply to Join",
    ctaHref: "#contact",
  },

  /* ---------- contact ---------- */
  contact: {
    heading: "Get in touch",
    body: "Questions, sponsorship, or collaboration? Drop us a line and our team will get back to you.",
  },
};

export type Site = typeof site;
