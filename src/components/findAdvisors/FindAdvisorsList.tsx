import "./FindAdvisorsList.css";
import FindAdvisorsCard from "./FindAdvisorsCard";
import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import profile4 from "../../assets/profile4.png";
import profile5 from "../../assets/profile5.png";
import profile7 from "../../assets/profile7.png";
import profile8 from "../../assets/profile8.png";

type Consultant = {
  id: number;
  image: string;
  name: string;
  badge: "Insider" | "Pro" | "AdComm";
  rating: number;
  reviews: number;
  description: string;
  price: number;
};

const consultants: Consultant[] = [
  {
    id: 1,
    image: profile4,
    name: "Jordan",
    badge: "Insider",
    rating: 4.9,
    reviews: 5,
    description:
      "Former admissions reader and Yale Law grad—insider tips to perfect your application.",
    price: 70,
  },
  {
    id: 2,
    image: profile7,
    name: "Sara",
    badge: "AdComm",
    rating: 4.7,
    reviews: 10,
    description: "Former admissions reader and Yale Law grad.",
    price: 100,
  },
  {
    id: 3,
    image: profile2,
    name: "Cynthia",
    badge: "Pro",
    rating: 4.8,
    reviews: 10,
    description: "Former admissions reader and Yale Law grad.",
    price: 55,
  },
  {
    id: 4,
    image: profile1,
    name: "Sara",
    badge: "AdComm",
    rating: 4.7,
    reviews: 10,
    description: "Former admissions reader and Yale Law grad.",
    price: 100,
  },
  {
    id: 5,
    image: profile3,
    name: "Sara",
    badge: "AdComm",
    rating: 4.7,
    reviews: 15,
    description: "Former admissions reader and Yale Law grad.",
    price: 100,
  },
  {
    id: 6,
    image: profile5,
    name: "Cynthia",
    badge: "Pro",
    rating: 4.8,
    reviews: 10,
    description: "Former admissions reader and Yale Law grad.",
    price: 55,
  },
  {
    id: 7,
    image: profile8,
    name: "Nathan",
    badge: "Insider",
    rating: 4.9,
    reviews: 5,
    description:
      "Former admissions reader and Yale Law grad—insider tips to perfect your application.",
    price: 70,
  },
  {
    id: 8,
    image: profile4,
    name: "Jordan",
    badge: "Insider",
    rating: 4.9,
    reviews: 5,
    description:
      "Former admissions reader and Yale Law grad—insider tips to perfect your application.",
    price: 70,
  },
];

const allConsultants = Array.from({ length: 160 }, (_, index) => ({
  ...consultants[index % consultants.length],
  id: index + 1,
}));

type FindAdvisorsListProps = {
  page: number;
};

function FindAdvisorsList({ page }: FindAdvisorsListProps) {
  const consultantsPerPage = 16;
  const startIndex = (page - 1) * consultantsPerPage;
  const displayedConsultants = allConsultants.slice(
    startIndex,
    startIndex + consultantsPerPage,
  );

  return (
    <div className="find-advisors-list">
      {displayedConsultants.map((consultant) => (
        <FindAdvisorsCard
          key={consultant.id}
          image={consultant.image}
          name={consultant.name}
          badge={consultant.badge}
          rating={consultant.rating}
          reviews={consultant.reviews}
          description={consultant.description}
          price={consultant.price}
        />
      ))}
    </div>
  );
}

export default FindAdvisorsList;
