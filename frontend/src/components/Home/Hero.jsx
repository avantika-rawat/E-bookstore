

const Hero = () => {
  return (
    <div className="h-[75vh] flex justify-center place-items-center ">
      
      <div className="w-3/6 mt-11 flex flex-col h-96 justify-center items-center gap-4 font-sans">
      <h1 className="text-6xl font-semibold text-white drop-shadow-2xl">Discover Your Next  Read</h1>
      <p className="mt-4 text-center text-xl">Discover a world of stories with our online book platform.Dive into your favorite genres, explore new authors, and read books anytime, anywhere. Perfect for book lovers and curious minds alike. Start your reading journey today!</p>
     <button className="text-white text-2xl font-semibold border-2 px-16 py-3 rounded-full cursor-pointer shadow-2xl  hover:bg-cyan-900   transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-100 duration-300">Discover Books</button>
     
    </div>  </div>
  )
}

export default Hero;
