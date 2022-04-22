import {
  faTachometerAlt,
  faPenRuler,
  faSquarePollHorizontal,
  faUserAlt,
  faBookSkull,
  faMicrochip,
  faArrowDownUpAcrossLine,

} from "@fortawesome/free-solid-svg-icons";

export const routes = [
  {
    key: "dashboard",
    name: "Dashboard",
    path: "./dashboard/dashboard.jsx",
    link: "dashboard",
    icon: faTachometerAlt,
    subpaths: [],
  },

  {
    key: "backlog",
    name: "Backlog",
    icon: faPenRuler,
    isOpen: false,
    path: "./dashboard/dashboard.jsx",
    link: "dashboard",
    subpaths: [
      {
        key: "backlogs",
        name: "Backlog",
        path: "./dashboard/backlog/index.jsx",
        link: "backlog",
      },
      {
        key: "active_sprint",
        name: "Active Sprint",
        path: "./dashboard/activeSprint/index.jsx",
        link: "sprint",
      },
    ],
  },
  {
    key: "account",
    name: "Account",
    icon: faSquarePollHorizontal,
    path: "./dashboard/dashboard.jsx",
    link: "dashboard",
    isOpen: false,
    subpaths: [
      {
        key: "Invoices",
        name: "Invoices",
        path: "./dashboard/invoice/index.jsx",
        link: "Invoices",
      },
      {
        key: "payment",
        name: "Payment",
        path: "./dashboard/payment",
        link: "Payment",
      },
      {
        key: "expenses",
        name: "Expenses",
        path: "./dashboard/expenses",
        link: "Expenses",
      },
    ],
  },

  {
    key: "client",
    name: "Client",
    icon: faUserAlt,
    isOpen: false,
    path: "./dashboard/dashboard.jsx",
    link: "dashboard",
    subpaths: [
      {
        key: "client1",
        name: "Client",
        path: "./dashboard/clients",
        link: "Client",
      },
      {
        key: "profile",
        name: "Profile",
        path: "./dashboard/profile",
        link: "Profile",
      },
      {
        key: "support",
        name: "Contact Us",
        path: "./dashboard/support",
        link: "Support",
      },
      {
        key: "reviews",
        name: "Reviews",
        path: "./dashboard/reviews",
        link: "Reviews",
      },
    ],
  },

  {
    key: "element",
    name: "UI Elements",
    icon: faBookSkull,
    path: "./dashboard/dashboard.jsx",
    link: "dashboard",
    isOpen: false,
    subpaths: [
      {
        key: "table",
        name: "Table Example",
        path: "./dashboard/table",
        link: "Table",
      },
      
      {
        key: "icon",
        name: "Icon",
        path: "./dashboard/icon",
        link: "Icon",
      },
      {
        key: "form",
        name: "Form",
        path: "./dashboard/form",
        link: "Form",
      },
      {
        key: "typography",
        name: "Typography",
        path: "./dashboard/typography",
        link: "Typography",
      },
      {
        key: "button",
        name: "Button",
        path: "./dashboard/button",
        link: "Button",
      },
      {
        key: "carousal",
        name: "Carousal",
        path: "./dashboard/carousal",
        link: "Carousal",
      },
    ],
  },
  {
    key: "app",
    name: "App",
    icon:   faMicrochip,
    path: "./dashboard/dashboard.jsx",
    link: "dashboard",
    isOpen: false,
    subpaths: [
      {
        key: "calender",
        name: "Calender",
        path: "./dashboard/calender/index.jsx",
        link: "Calender",
      },
      {
        key: "chat",
        name: "Chat",
        path: "./dashboard/chat",
        link: "Chat",
      },
      {
        key: "contact",
        name: "Contact",
        path: "./dashboard/contact",
        link: "Contact",
      },
    ],
  },
  {
    key: "project",
    name: "Project",
    icon:   faArrowDownUpAcrossLine,
    path: "./dashboard/dashboard.jsx",
    link: "dashboard",
    isOpen: false,
    subpaths: [
      {
        key: "information",
        name: "Project_Information",
        path: "./dashboard/project-info",
        link: "Project_Information",
      },
      {
        key: "timesheet",
        name: "Timesheet",
        path: "./dashboard/timesheet",
        link: "Timesheet",
      },
      {
        key: "leader",
        name: "Team_Leaders",
        path: "./dashboard/team-lead",
        link: "Team_Leaders",
      },
      {
        key: "report",
        name: "Report",
        path: "./dashboard/report",
        link: "Report",
      },
    ],
  },
  
];
