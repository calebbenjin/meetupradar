import React from 'react';
import Card from './Card';

interface CardProps {
  data: any;
}

const CardList = ({ data }: CardProps) => {
  return (
    <div className="px-8 py-4 mx-auto">
      {data.map((item: any) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CardList;
