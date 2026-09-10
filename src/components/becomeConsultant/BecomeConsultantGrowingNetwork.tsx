import "./BecomeConsultantGrowingNetwork.css";
import { useState } from "react";
import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import profile4 from "../../assets/profile4.png";
import profile5 from "../../assets/profile5.png";
import profile6 from "../../assets/profile6.png";
import profile7 from "../../assets/profile7.png";
import profile8 from "../../assets/profile8.png";
import profile9 from "../../assets/profile9.png";
import profile10 from "../../assets/profile10.png";
import profile11 from "../../assets/profile11.png";

const profiles = [
  profile1,
  profile2,
  profile3,
  profile4,
  profile5,
  profile6,
  profile7,
  profile8,
  profile9,
  profile10,
  profile11,
];

function BecomeConsultantGrowingNetwork() {
  const [mobileProfiles] = useState(() => {
    const shuffledProfiles = [...profiles];

    for (let i = shuffledProfiles.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      [shuffledProfiles[i], shuffledProfiles[randomIndex]] = [
        shuffledProfiles[randomIndex],
        shuffledProfiles[i],
      ];
    }

    return shuffledProfiles.slice(0, 9);
  });

  return (
    <section className="growing-network">
      <h2>Join Our Growing Network</h2>
      <div className="growing-network-images growing-network-desktop">
        <img src={profile2} alt="Consultant profile" />
        <img src={profile5} alt="Consultant profile" />
        <img src={profile4} alt="Consultant profile" />
        <img src={profile3} alt="Consultant profile" />
        <img src={profile7} alt="Consultant profile" />
        <img src={profile11} alt="Consultant profile" />
        <img src={profile9} alt="Consultant profile" />
        <img src={profile10} alt="Consultant profile" />
        <img src={profile2} alt="Consultant profile" />
        <img src={profile6} alt="Consultant profile" />
        <img src={profile8} alt="Consultant profile" />
        <img src={profile1} alt="Consultant profile" />
      </div>
      <div className="growing-network-images growing-network-mobile">
        {mobileProfiles.map((profile) => (
          <img src={profile} alt="Consultant profile" key={profile} />
        ))}
      </div>
    </section>
  );
}

export default BecomeConsultantGrowingNetwork;
