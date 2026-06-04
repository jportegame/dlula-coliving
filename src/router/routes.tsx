import type { JSX } from "react";
import type { RouteObject } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import { siteConfig } from "../config/siteConfig";

import MainPage from "../pages/MainPage";
import OurRoomsPage from "../pages/OurRoomsPage";
import RoomDetailsPage from "../pages/RoomsDetailsPage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import CommonAreasPage from "../pages/CommonAreasPage";
import CommonAreaDetailsPage from "../pages/CommonAreaDetailsPage";

const pageComponents: Record<string, JSX.Element> = {
  MainPage: <MainPage />,
  OurRoomsPage: <OurRoomsPage />,
  AboutUsPage: <AboutUsPage />,
  ContactUsPage: <ContactUsPage />,
  CommonAreasPage: <CommonAreasPage />,
};

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      ...siteConfig.navigation.map((route) => ({
        path: route.path === "/" ? undefined : route.path.replace("/", ""),
        index: route.path === "/",
        element: pageComponents[route.component],
      })),
      {
        path: "rooms/:slug",
        element: <RoomDetailsPage />,
      },
      {
        path: "common-areas/:slug",
        element: <CommonAreaDetailsPage />,
      },
    ],
  },
];
