import Hero from "../components/Home/Hero";
import RecentlyAdded from "../components/Home/RecentlyAdded";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(/images/bg-img.jpg)`,
        }}
        className="h-screen bg-cover text-white "
      >
        <Navbar />
        <Hero />
      </div>
      <RecentlyAdded />
    </>
  );
};

export default Home;
