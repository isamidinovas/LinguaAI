import Image from "next/image";
import userPng from "../../../assets/user.png";
import { CiEdit } from "react-icons/ci";
import FlashcardsList from "@/src/components/FlashcardsList";
const Profile = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-20 p-6">
      <h2 className=" text-bold text-3xl ">Profile</h2>
      <div className="shadow-lg p-6 rounded-lg w-[400px] mt-6">
        <div className="flex mt-10 gap-4  rounded-xl p-4 items-center">
          <div className="relative w-[100px] h-[100px]">
            <Image
              src={userPng}
              alt="user"
              width={80}
              height={80}
              className="rounded-full"
            />
            <span className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
              <CiEdit size={24} className="text-gray-700" />
            </span>
          </div>

          <div>
            <p>Sasha</p>
            <p>sasha@gmail.com</p>
          </div>
        </div>
        <div className="flex  mt-6">
          <form className="w-[300px] flex flex-col items-center gap-2">
            <input
              type="text"
              placeholder="Change name"
              className="border rounded px-2 py-1 w-full "
              defaultValue="Sasha"
            />
            <input
              type="email"
              placeholder="Change email"
              className="border rounded px-2 py-1 w-full"
              defaultValue="sasha@gmail.com"
            />
            <button
              type="submit"
              className="bg-green-700 text-white px-4 py-1 rounded hover:bg-green-900 transition w-full"
            >
              Save
            </button>
          </form>
        </div>
      </div>
      <div className="mt-10 font-bold">
        <h3>My Flashcards</h3>
        <FlashcardsList />
      </div>
    </div>
  );
};
export default Profile;
