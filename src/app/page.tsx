import Image from "next/image";
import BgImg from "../../public/person.jpeg";

const Home = () => {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b bg-white">
      <div className="max-w-[1200px] flex flex-col-reverse md:flex-row justify-between items-center mx-auto pt-[10%] px-6 md:px-0 gap-10">
        <div className="flex flex-col gap-6 text-black md:max-w-[50%]">
          <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl text-cyan-700">
            LinguaAI
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl">
            description
          </p>
          <a
            href="#"
            className="border-green-700 p-2 bg-green-700 sm:w-[55%] lg:w-[50%] rounded-xl text-center text-white font-bold"
          >
            Get start
          </a>
        </div>

        <div className="w-full md:w-[45%] flex justify-center">
          <Image
            src={BgImg}
            alt="bg image"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
