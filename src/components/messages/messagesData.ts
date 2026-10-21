import jeremyImage from "../../assets/jeremy-messages.png";
import titusImage from "../../assets/titus-messages.png";
import ariImage from "../../assets/ari-messages.png";

export type Conversation = {
  id: string;
  name: string;
  image: string;
  preview: string;
  time: string;
  unread: boolean;
  flagged: boolean;
  pinned: boolean;
};

export const initialConversations: Conversation[] = [
  {
    id: "jeremy",
    name: "Jeremy R.",
    image: jeremyImage,
    preview: "Lorem ipsum dolor sit amet consectetur.",
    time: "1h",
    unread: false,
    flagged: true,
    pinned: true,
  },
  {
    id: "titus",
    name: "Titus K.",
    image: titusImage,
    preview: "Lorem ipsum dolor sit amet consectetur.",
    time: "2d",
    unread: false,
    flagged: false,
    pinned: false,
  },
  {
    id: "ari",
    name: "Ari L.",
    image: ariImage,
    preview: "Lorem ipsum dolor sit amet consectetur.",
    time: "3d",
    unread: true,
    flagged: false,
    pinned: false,
  },
];
