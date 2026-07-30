import Header from "../components/layout/Header";
import HomeHero from "../components/home/HomeHero";
import HomeWorkWith from "../components/home/HomeWorkWith";
import HomeHowItWorks from "../components/home/HomeHowItWorks";
import HomeStrategySession from "../components/home/HomeStrategySession";
import HomeSimpleDirect from "../components/home/HomeSimpleDirect";
import HomePopularServices from "../components/home/HomePopularServices";

function Home() {
  return (
    <>
      <Header />

      <main>
        <HomeHero />
        <HomeWorkWith />
        <HomeHowItWorks />
        <HomeStrategySession />
        <HomeSimpleDirect />
        <HomePopularServices />
      </main>
    </>
  );
}

export default Home;
