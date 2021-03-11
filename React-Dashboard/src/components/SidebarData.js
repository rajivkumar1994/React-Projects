import React from "react";

import * as FAIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text"
  },
  {
    title: "Products",
    path: "/products",
    icon: <FAIcons.FaCartPlus />,
    className: "nav-text"
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    className: "nav-text"
  },
  {
    title: "Teams",
    path: "/teams",
    icon: <IoIcons.IoMdPeople />,
    className: "nav-text"
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FAIcons.FaEnvelopeOpenText />,
    className: "nav-text"
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    className: "nav-text"
  }
];
