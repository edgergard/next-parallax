import {
  About,
  Carousel,
  Footer,
  Hero,
  Leaderboard,
} from "@/components/sections";

const Home: React.FC = () => {
  return (
    <main>
      <Hero className="pb-[300px] px-page-x" />
      <About className="pt-[100px] pb-[300px] px-page-x" />
      <Carousel className="pt-[100px] pb-[300px]" />
      <Leaderboard className="pt-[100px] pb-[500px] px-page-x" />
      <Footer className="pb-[112px]" />
    </main>
  );
};

export default Home;
