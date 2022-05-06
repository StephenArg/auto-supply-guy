import { NavBarItem } from "../types/NavBar";

export const navBarItems: NavBarItem[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Shop",
    link: "/store",
    subItems: [
      {
        title: "Auto Detailing Supplies",
        link: "/supplies",
        subItems: [
          {
            title: "Aerosols",
            link: "/aerosols",
          },
          {
            title: "Stuff",
            link: "/aerosols",
          },
          {
            title: "Other",
            link: "/aerosols",
          },
        ],
      },
      {
        title: "Auto Detailing Accessories",
        link: "/accessories",
        subItems: [
          {
            title: "Air/Water Guns",
            link: "/airwaterguns",
          },
        ],
      },
      {
        title: "Dealer Supplies",
        link: "/dealer",
        subItems: [
          {
            title: "Flags/Paperwork",
            link: "/flagsPaperwork",
          },
        ],
      },
    ],
  },
  {
    title: "Checkout",
    link: "/checkout",
  },
  {
    title: "My Account",
    link: "/account",
  },
  {
    title: "Privacy/Terms",
    link: "/terms",
  },
];
