import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-[75vh] flex justify-center items-center px-4 py-8">
      <div className="w-full md:w-4/6 lg:w-3/6 flex flex-col justify-center items-center gap-6 font-sans text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl uppercase font-bold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
          Discover Your Next Read
        </h1>
        <p className="text-sm md:text-lg lg:text-xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
          Discover a world of stories with our online book platform. Dive into
          your favorite genres, explore new authors, and read books anytime,
          anywhere. Perfect for book lovers and curious minds alike. Start your
          reading journey today!
        </p>
        <Link
          to="/all-books"
          className="text-white text-base md:text-lg lg:text-2xl font-semibold border-2 px-8 md:px-12 py-2 md:py-3 rounded-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] transition-transform duration-300 ease-in-out hover:scale-105"
        >
          Discover Books
        </Link>
      </div>
    </div>
  );
};

export default Hero;
