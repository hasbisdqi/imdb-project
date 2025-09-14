import Image from "next/image";

interface profilePicProps {
  name: string;
  age: number;
  profileUrl: string;
}

export default function ProfilePicture({
  name,
  age,
  profileUrl,
}: profilePicProps) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Image
        src={profileUrl}
        alt={`Profile Picture of ${name}`}
        width="250"
        height="250"
        className="border-2 border-blue-50 rounded-full object-cover"
      />
      <h3 className="font-bold">{name}</h3>
      <p className="text-gray-500">{age}</p>
    </div>
  );
}
