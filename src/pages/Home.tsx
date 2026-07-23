import Header from "../components/layout/Header";
import HomeHero from "../components/home/HomeHero";
import HomeWorkWith from "../components/home/HomeWorkWith";

function Home() {
  return (
    <>
      <Header />

      <main>
        <HomeHero />
        <HomeWorkWith />
      </main>
    </>
  );
}

export default Home;
