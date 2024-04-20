import React from "react";
import { VscDebugStart } from "react-icons/vsc";
import { FaRobot } from "react-icons/fa";
import { RiSwordFill } from "react-icons/ri";
import threedViewImg from "@/public/openscad.jpg";
import robotBuildImg from "@/public/wettbewerb.jpg";
import websiteImg from "@/public/dokumentation.jpg";

export const links = [
     {
          name: "Start",
          hash: "#start",
     },
     {
          name: "Über uns",
          hash: "#über uns",
     },
     {
          name: "Roboter",
          hash: "#roboter",
     },
     {
          name: "Programme",
          hash: "#programme",
     },
     {
          name: "Kontakt",
          hash: "#kontakt",
     },
] as const;

export const experiencesData = [
     {
          title: "Der Anfang",
          location: "Bohlebots",
          description:
          "Wir haben Juni 2023 angefangen unseren Roboter zu bauen.",
          icon: React.createElement(VscDebugStart),
          date: "2023",
     },
     {
          title: "Generalprobe in Köln",
          location: "Köln",
          description:
          "Die Generalprobe war unser erster inoffizieller Wettbewerb.",
          icon: React.createElement(FaRobot),
          date: "2024",
     },
     {
          title: "Erster Wettbewerb",
          location: "Sankt Augustin",
          description: 
          "Unseren ersten offiziellen Wettbewerb hatten wir in Sankt Augustin",
          icon: React.createElement(RiSwordFill),
          date: "2024",
     },
] as const;

export const projectsData = [
     {
          title: "Der Anfang",
          description:
          "Wir haben Juni 2023 angefangen unseren Roboter zu bauen.",
          tags: ["OpenSCAD", "3d Druck"],
          imageUrl: threedViewImg,
     },
     {
          title: "Wettbewerbe",
          description:
          "Wir hatten insgesamt 3 Wettbewerbe, darunter die Generalprobe in Köln, die Westdeutsche Meisterschaft in Sankt Augustin und die German Open in Kassel.",
          tags: ["Arduino"],
          imageUrl: robotBuildImg,
     },
     {
          title: "Dokumentation",
          description: "Nun sehen Sie unsere Dokumentation zum Roboter.",
          tags: ["Next.js", "TailwindCSS", "TypeScript", "Framer", "Three.js"],
          imageUrl: websiteImg,
     },
] as const;

export const skillsData = [
     "HTML",
     "CSS",
     "JavaScript",
     "TypeScript",
     "React",
     "Next.js",
     "Node.js",
     "TailwindCSS",
     "Framer Motion",
     "Arduino",
     "RealityCapture",
     "Blender",
     "OpenSCAD",
] as const;