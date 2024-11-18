import Page from "./page";

const pages: Page[] = [
  new Page({
    title: "Home",
    path: "/",
    coverImageSrc: "/images/about-cover.jpg",
  }),
  new Page({
    title: "About Me",
    path: "/about",
    coverImageSrc: "/images/about-cover.jpg",
  }),
  new Page({
    title: "Contact Me",
    path: "/contact",
    coverImageSrc: "/images/contact-cover.jpg",
  }),
  new Page({
    title: "Skills",
    path: "/skills",
    coverImageSrc: "/images/skills-cover.jpg",
  }),
  new Page({
    title: "Projects",
    path: "/projects",
    coverImageSrc: "/images/projects-cover.jpg",
  }),
];
export default pages;
