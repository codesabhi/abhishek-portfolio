import crypto from "./projectsImage/crypto4.png";
import wordIndex from './projectsImage/Word Index.png'
import LCO from './projectsImage/lco.png'

export const products = [
  {
    id: 1,
    title: "Crypto Stalker",
    img: crypto,
    link: "https://crypto-stalker.netlify.app/",
    desc: "A crypto currency application to stalk all your favorite cryptocurrencies at one place including market cap, time gap and chart analysis.",
    tech: [
      "React",
      "Material UI",
      "Chart Js",
      "Redux Toolkit",
      "Netlify",
    ],
    gitlink: "https://github.com/codesabhi/crypto-stalker-app",
  },
  {
    id: 2,
    title: "Word Index",
    img: wordIndex,
    link: "https://wordindex.netlify.app/",
    desc: "A dictionary app which supports twelve languages along with audio support also a progressive web app that is downloadable on respectable devices",
    tech: [
      "React",
      "Material UI",
      "Axios",
      "PWAs",
      "Netlify",
    ],
    gitlink: "https://github.com/codesabhi/word-index",
  },
  {
    id: 3,
    title: "Learn Code Online",
    img: LCO,
    link: "https://lcocourse.netlify.app/",
    desc: "LCO coding course selling website along with snipcart integration and contentful CMS support build with react, gatsby and graphQL.",
    tech: [
      "React",
      "Gatsby",
      "GraphQL",
      "Contentful",
      "Snipcart",
      "Netlify",
    ],
    gitlink: "https://github.com/codesabhi/LCO-course-App",
  },
];
