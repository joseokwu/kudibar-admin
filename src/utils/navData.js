import {
  Homeicon,
  UserIcon,
  ChartIcon,
  FinanceIcon,
  TranzIcon,
  SupportIcon,
  SettingsIcon,
  LogoutIcon,
} from "../component/svgs";

export const navs = [
  {
    name: "Dashboard",
    link: `/`,
    icon: <Homeicon />,
  },
  {
    name: "Users",
    link: `/users`,
    icon: <UserIcon />,
  },
  {
    name: "Events",
    link: `/events`,
    icon: <ChartIcon />,
  },
  // {
  // 	name: "Campaigns",
  // 	link: `/campaigns`,
  // 	icon: <ChartIcon />,
  // },
  // {
  // 	name: "Financial Management",
  // 	link: `/financial-management`,
  // 	icon: <FinanceIcon />,
  // },
  {
    name: "Transaction History",
    link: `/transaction-history`,
    icon: <TranzIcon />,
  },
  {
    name: "Log Management",
    link: `/log-management`,
    icon: <TranzIcon />,
  },
  {
    name: "Notification",
    link: `/notification`,
    icon: <TranzIcon />,
  },

  {
    name: "Support",
    link: `/support`,
    icon: <SupportIcon />,
  },
  {
    name: "Settings",
    link: `/settings`,
    icon: <SettingsIcon />,
  },
  {
    name: "Logout",
    link: ``,
    icon: <LogoutIcon />,
  },
];
