import Page from "@/lib/page";

const pages: Page[] = [
  new Page({
    title: "Home",
    path: "/",
    coverSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  }),
  new Page({
    title: "About Me",
    path: "/about",
    coverSrc: "/Images/about.png",
  }),
  new Page({
    title: "Contact Me",
    path: "/contact",
    coverSrc: "Images/contact.png",
  }),
  new Page({
    title: "Skills",
    path: "/skills",
    coverSrc: "/Images/skills.png",
  }),
  new Page({
    title: "Projects",
    path: "/projects",
    coverSrc: "Images/projects.png",
  }),
];
export default pages;
