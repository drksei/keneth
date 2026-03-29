import { Icons } from "@/components/icons";
import { HomeIcon, Icon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Godot } from "@/components/ui/svgs/godot";
import { Git } from "@/components/ui/svgs/git";
import { Bash } from "@/components/ui/svgs/bash";
import { Html } from "@/components/ui/svgs/html";
import { Linux } from "@/components/ui/svgs/linux";

export const DATA = {
  name: "Keneth Rapalo",
  initials: "KR",
  url: "https://keneth-rapalo.es",
  location: "Barcelona, SP",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "$Maintenance and support technician - Computer systems & networks.",
  summary:
    "I work on end-to-end computer systems — assembling, configuring, and maintaining computers. Passionate about technology with a solid understanding of hardware and software environments. Proactive individual, eager to learn and grow professionally every day. Outside of my profession, I really enjoy about 2D character design check it out at my [VSCO ↗](https://vsco.co/drkv2/gallery/)",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Java", icon: Java },
    { name: "Godot Engine ", icon: Godot },
    { name: "Git ", icon: Git },
    { name: "$Bash", icon: Bash },
    { name: "Html", icon: Html},
    { name: "Linux", icon: Linux},

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
   /* { href: "/blog", icon: NotebookIcon, label: "Blog" }, */
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/drksei",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/keneth-rapalo/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Gitlab: {
        name: "Gitlab",
        url: "https://gitlab.com/keneth.rapalo",
        icon: Icons.gitlab,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/_keneth.r/",
        icon: Icons.instagram,

        navbar: true,
      },
      Telegram: {
        name: "Instagram",
        url: "https://t.me/drksei",
        icon: Icons.instagram,
        navbar: false,
      },
      Gallery: {
        name: "Vsco",
        url: "https://vsco.co/drkv2/gallery/",
        icon: Icons.vsco,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "App Informática Nou Barris",
      href: "https://atomic.finance",
      badges: [],
      location: "Presential",
      title: "Hardware Maintenance Technician",
      logoUrl: "/app.png",
      start: "Ago 2024",
      end: "Dec 2024",
      description:
        "Computer equipment diagnostics; comprehensive preventive and corrective hardware maintenance; operating system installation; multi-channel technical support; Xiaomi device recovery (unbricking), device optimization through the implementation of alternative/custom operating systems (LineageOS, PixelExperience, etc.).",
    },
    {
      company: "OnlineJobs",
      badges: [],
      location: "Remote",
      title: "Online Opinion and Survey Analyst",
      logoUrl: "/onlinejobs.png",
      start: "Dec 2022",
      end: "Sep 2023",
      description: "Active participation in market research for multinational companies, providing insights into consumer habits and product preferences.",
    },
    {
      company: "INM SRL",
      badges: [],
      location: "San Pedro Sula, HN",
      title: "IT Helpdesk & software operator",
      logoUrl: "/INM.jpg",
      start: "Ago 2017",
      end: "Sep 2019",
      description:
        "Specialized technical support with customer service, Diagnosis and resolution of computer equipment issues, comprehensive hardware maintenance, Remote assistance using remote control tools.",
    },
  ],
  education: [
    {
      school: "Institut tecnologic de Barcelona",
      href: "https://itb.cat/",
      degree: "Intermediate level in microcomputer systems and networks.",
      logoUrl: "/itb.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "Consorci per a la normaltizació Lingüística",
      href: "https://www.cpnl.cat/",
      degree: "Catalan certificate Elementary",
      logoUrl: "/cpnl.png",
      start: "2020",
      end: "2023",
    },
    {
      school: "Institute Delfina Mejia",
      href: "{undefined}",
      degree: "Technological baccalaureate",
      logoUrl: "/delfina.jpg",
      start: "2016",
      end: "2019",
    },

  ],
  projects: [
    {
      title: "Five nights in darkness",
      href: "https://gitlab.com/keneth.rapalo/plinga_studios",
      dates: "A 2D Godot game",
      active: true,
      description:
        "Five Nights in darkness is a fanmade horror game. You play as a night security guard tasked with monitoring the facilities, ensuring everything is in order. Can you survive the nights?",
      technologies: [
        "Godot",
        "gdscript",
        "C++",
        "Web",
        "Android",
        "Linux",
        "Windows",
      ],
      links: [
        {
          type: "Demo",
          href: "https://drksei.github.io/fnid/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Repository",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.gitlab className="size-3" />,
        },
      ],
      image: "",
      video:
        "/fnid-vid.mp4",
    },

    {
      title: "Simple Terminal",
      href: "https://gitlab.com/keneth.rapalo/simple-terminalportfolio",
      dates: "Simple web terminal portfolio",
      active: true,
      description:
        "Interactive terminal-type portfolio, allows interaction through commands such as “ls, clear, social.. etc”.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
      ],
      links: [
        {
          type: "Website",
          href: "https://drksei.github.io/portfolio/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "In development",
          href: "",
        },
      ],
      image: "/terminal.site.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
  ],
} as const;
