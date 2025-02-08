"use client";
import BackButton from "@/app/components/admin/BackButton";
import useStore from "../../../../../store";
import Image from "next/image";
import { Camera } from "lucide-react";
function Profile() {
  const {profilePhoto, coverPhoto, setProfilePhoto, setCoverPhoto } = useStore();
  const email = useStore((state: { email: string }) => state.email);

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setImage: (value: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4">
      <BackButton text="Go Back" link="/admin" />

      {/* Cover Photo Section */}
      <div className="relative w-full h-48 bg-gray-300 rounded-lg overflow-hidden">
        <Image
          width={1000}
          height={1000}
          src={coverPhoto || "/default-cover.jpg"} // Default cover image
          alt="Cover"
          className="w-full h-full object-cover"
        />
         <label className="absolute top-2 right-2 bg-black bg-opacity-50 p-2 rounded-full cursor-pointer">
          <Camera className="text-white w-6 h-6" />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleImageUpload(e, setCoverPhoto)}
          />
        </label>
      </div>

      {/* Profile Photo Section */}
      <div className="relative flex flex-col items-center -mt-16">
  <div className="relative w-32 h-32 rounded-full border-4 border-white overflow-hidden">
    <Image
    width={1000}
    height={1000}
      src={profilePhoto || "/default-profile.jpg"}
      alt="Profile"
      className="w-full h-full object-cover"
    />
    <label className="absolute bottom-2 right-2 bg-black bg-opacity-70 p-2 rounded-full cursor-pointer">
      <Camera className="text-white w-6 h-6" />
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleImageUpload(e, setProfilePhoto)}
      />
    </label>
  </div>
  <h1 className="mt-4 text-2xl font-bold">John Doe</h1>
  <p className="text-gray-600">Sales Manager</p>
</div>


      {/* About Section */}
      <div className="mt-10">
        <h1 className="text-xl font-semibold">About</h1>
        <p className="text-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste nam architecto mollitia qui maiores! Repellat totam odio, quisquam harum minima reiciendis, excepturi veritatis delectus, cum vitae nesciunt dolores itaque nam.
        </p>
      </div>

      {/* Email Info */}
      <p className="mt-4 text-xl font-semibold">
        Logged in as <span className="font-medium">{email || "Guest"}</span>
      </p>
    </div>
  );
}

export default Profile;

  