import Image from 'next/image';
import React from 'react';

interface CardProps {
  data: any;
}

const Card = ({ ...item }: any) => {
  return (
    <div className="my-8 p-4 mx-auto border-solid border rounded-md border-gray-300">
      <h2 className="font-semibold text-xl text-sky-600">{item?.title}</h2>
      <p className="mt-2">
        {item.startDate} {item.endDate}
      </p>
      <p className="mt-2">{item.location}</p>
      <p className="mt-4">{item.description}</p>
      <div className="relative w-full h-40 mt-4">
        <Image src={item.coverImg} alt="coverImage" fill />
      </div>
      <div className="mt-2 flex flex-row justify-between items-center">
        <p className="cursor-pointer">Comments: {item.comments.length}</p>
        <p className="cursor-pointer">Views: {item.views}</p>
        <p className="cursor-pointer">Likes: {item.likes}</p>
      </div>
    </div>
  );
};

export default Card;
