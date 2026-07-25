import Header from "../components/layout/Header";
import HomeHero from "../components/home/HomeHero";
import HomeWorkWith from "../components/home/HomeWorkWith";
import HomeHowItWorks from "../components/home/HomeHowItWorks";

function Home() {
  return (
    <>
      <Header />

      <main>
        <HomeHero />
        <HomeWorkWith />
        <HomeHowItWorks />
      </main>
    </>
  );
}

export default Home;
