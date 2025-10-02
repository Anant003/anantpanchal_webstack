import { ReactComponent as ApiIcon } from "../assets/api-svgrepo-com.svg";
import { ReactComponent as ReactIcon } from "../assets/react-svgrepo-com.svg";
import { ReactComponent as AccessibilityIcon } from "../assets/accessibility-svgrepo-com.svg";
import { ReactComponent as EcommerceIcon } from "../assets/ecommerce-online-shopping-svgrepo-com.svg";

export const cardData = [
  {
    id: 1,
    title: "React Challenges",
    description:
      "A collection of React challenges and projects demonstrating various concepts and techniques.",
    link: "/projects/react-challenges",
    icon: <ReactIcon width={80} height={80} />,
  },
  {
    id: 2,
    title: "API Examples",
    description:
      "Explore various examples of fetching and displaying API data using React.",
    link: "/projects/api-examples",
    icon: <ApiIcon width={80} height={80} />,
  },
  {
    id: 3,
    title: "Accessible Components",
    description:
      "View and download my professional resume showcasing my skills and experience.",
    link: "/projects/accessibility-components",
    icon: <AccessibilityIcon width={80} height={80} />,
  },
  {
    id: 4,
    title: "Ecommerce View",
    description:
      "Explore various ecommerce related projects and examples.",
    link: "/projects/ecommerce-view",
    icon: <EcommerceIcon width={80} height={80} />,
  }
];
