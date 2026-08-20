"use client";
import Image from "next/image";
import Link from "next/link";

type props = {
  name: string;
  gender: string;
  image: string;
  description: string;
};

export default function dbzCard({ name, gender, image, description }: props) {
  return (
    <Link href={`/Dragon/${name}`}>
      <div className="card flex mt-10 p-4 rounded shadow-md w-200 h-100 bg-gray-900">
        <Image
          className="rounded"
          src={image}
          alt={name}
          width={200}
          height={200}
        />
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm text-gray-300">Gender: {gender}</p>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </Link>
  );
}
