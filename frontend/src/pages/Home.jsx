import Hero from "../components/Home/Hero";
import RecentlyAdded from "../components/Home/RecentlyAdded";

const Home = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(public/images/bg.jpg)` }}
        className="h-screen bg-cover text-white "
      >
        <Hero />
      </div>
      <RecentlyAdded />
    </>
  );
};

export default Home;
