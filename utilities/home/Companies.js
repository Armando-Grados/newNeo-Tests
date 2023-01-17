/* Trust companies */
import abbott from "../../public/assets/Trust/abbott.png";
import intersegura from "../../public/assets/Trust/intersegura.png";
import protecta from "../../public/assets/Trust/protecta.png";
import rimac from "../../public/assets/Trust/rimac.png";
import semana from "../../public/assets/Trust/semana.png";

/* Partner companies */
import aws from "../../public/assets/Partners/aws.png";
import googleCloud from "../../public/assets/Partners/google-cloud.png";
import googleMarkettingPlatform from "../../public/assets/Partners/google-marketing-platform.png";
import hubspot from "../../public/assets/Partners/hubspot.png";
import salesforce from "../../public/assets/Partners/salesforce.png";

const trustComps = [
  {
    imgSrc: abbott.src,
    alt: "abbot",
  },
  {
    imgSrc: intersegura.src,
    alt: "intersegura",
  },
  {
    imgSrc: protecta.src,
    alt: "protecta",
  },
  {
    imgSrc: rimac.src,
    alt: "rimac",
  },
  {
    imgSrc: semana.src,
    alt: "semana",
  },
];

const partnerComps = [
  {
    imgSrc: aws.src,
    alt: "AWS",
  },
  {
    imgSrc: googleCloud.src,
    alt: "Google cloud",
  },
  {
    imgSrc: googleMarkettingPlatform.src,
    alt: "Google marketting platform",
  },
  {
    imgSrc: hubspot.src,
    alt: "Hubspot",
  },
  {
    imgSrc: salesforce.src,
    alt: "Salesforce",
  },
];

export { trustComps, partnerComps };
