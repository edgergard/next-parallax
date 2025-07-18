import { Leaderboard } from "@/components/containers";
import { ArrowIcon } from "@/components/icons";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-full gap-y-10 items-center bg-black">
      <Leaderboard />
    </div>
  );
};

export default Home;
