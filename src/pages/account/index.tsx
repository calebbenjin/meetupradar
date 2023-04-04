import Layout from '@/components/Layout';
import React from 'react';
import coverImg from '@/public/cardImg.png';
import userImg from '@/public/userImg.jpg';
import CardList from '@/components/CardList';

const post = [
  {
    id: 1,
    title: `Tech Unite Africa 2023`,
    startDate: `Mar 29, 2023`,
    endDate: `Mar 30, 2023`,
    location: `Muson Convention Center • Lagos, LA`,
    description: `Tech Unite Africa is a convergence of tech companies, tech professionals, tech enthusiasts and the general public from across the world. The event will play host to a number of seminars, training, and conferences on issues bordering on the development of the tech industry in Africa.`,
    coverImg: coverImg,
    views: `203`,
    likes: `240`,
    comments: [
      {
        userName: `rose`,
        userImg: userImg,
        comment: `Hello this is the comment area!! tell me what you think!`,
      },
      {
        userName: `john`,
        userImg: userImg,
        comment: `Hello this is the comment area!! tell me what you think!`,
      },
      {
        userName: `mike`,
        userImg: userImg,
        comment: `Hello this is the comment area!! tell me what you think!`,
      },
    ],
  },
  {
    id: 2,
    title: `Tech Unite Africa 2023`,
    startDate: `Mar 29, 2023`,
    endDate: `Mar 30, 2023`,
    location: `Muson Convention Center • Lagos, LA`,
    description: `Tech Unite Africa is a convergence of tech companies, tech professionals, tech enthusiasts and the general public from across the world. The event will play host to a number of seminars, training, and conferences on issues bordering on the development of the tech industry in Africa.`,
    coverImg: coverImg,
    views: `203`,
    likes: `240`,
    comments: [
      {
        userName: `rose`,
        userImg: userImg,
        comment: `Hello this is the comment area!! tell me what you think!`,
      },
      {
        userName: `john`,
        userImg: userImg,
        comment: `Hello this is the comment area!! tell me what you think!`,
      },
      {
        userName: `mike`,
        userImg: userImg,
        comment: `Hello this is the comment area!! tell me what you think!`,
      },
    ],
  },
];

const AccountPage = () => {
  return (
    <Layout>
      <CardList data={post} />
    </Layout>
  );
};

export default AccountPage;
