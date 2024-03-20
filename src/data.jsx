import {
  CategoryIcon,
  DashboardIcon,
  InstitutiionIcon,
  NotificationsIcon,
  ReportIcon,
  SitesIcon,
  UsersIcon,
} from "./assets/constants";

export const sidebarData = [
  {
    icon: <DashboardIcon />,
    name: "Dashboard",
    path: "/",
  },
  {
    icon: <CategoryIcon />,
    name: "Categories",
    path: "/category",
  },
  {
    icon: <UsersIcon />,
    name: "Users",
    path: "/users",
  },
  {
    icon: <SitesIcon />,
    name: "Sites",
    path: "/sites",
  },
  {
    icon: <ReportIcon />,
    name: "Reports",
    path: "/reports",
  },
  {
    icon: <NotificationsIcon />,
    name: "Notifications",
    path: "/notifications",
  },
  {
    icon: <InstitutiionIcon />,
    name: "Institutiion Details",
    path: "/institution",
  },
];

export const DashBoardRightMenu = [
  {
    id: 1,
    name: "Overall",
    path: "overall",
  },
  {
    id: 2,
    name: "User Categories",
    path: "user",
  },
  {
    id: 3,
    name: "Categories",
    path: "category",
  },
  {
    id: 4,
    name: "e-Resources",
    path: "eresource",
  },
];

export const CategroyRightMenu = [
  {
    id: 1,
    name: "Site Categories",
    path: "site",
  },
  {
    id: 2,
    name: "User Categories",
    path: "user",
  },
];
