import { Button } from "@/components/ui";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-10 items-center">
      <Button arrowDirection="down" variant="arrow" />
      <Button variant="outline" size="big">
        13213213213213213
      </Button>
      <Button variant="text" size="small">
        13213213213213213
      </Button>
      <Button variant="text" size="big">
        13213213213213213
      </Button>
    </div>
  );
};

export default Home;
