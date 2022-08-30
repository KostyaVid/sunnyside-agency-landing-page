import React from 'react';
import CardClient, { ICardClient } from './CardClient/CardClient';

const clients: Array<ICardClient> = [
  {
    name: 'Emily R.',
    job: 'Marketing director',
    description:
      'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    urlImg: './images/image-emily.jpg',
  },
  {
    name: 'Tomas S.',
    job: 'Chief Operating Officer',
    description:
      'Subbyside`s enthusiasm couples with their keen interest in our brand`s success made it a satisfying and ejoyable experience.',
    urlImg: './images/image-thomas.jpg',
  },
  {
    name: 'Jennie F.',
    job: 'Business Owner',
    description:
      'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    urlImg: './images/image-jennie.jpg',
  },
];

const Client = () => {
  return (
    <section className="px-5 py-12 md:py-[155px] mx-auto max-w-screen-xl">
      <h2 className="opacity-50 text-lg sm:text-center tracking-[.2em]">CLIENT TESTIMONIALS</h2>
      <div className="mt-14 flex flex-col gap-12  md:gap-10 md:flex-row">
        {clients.map((elem) => (
          <CardClient key={elem.name} {...elem} />
        ))}
      </div>
    </section>
  );
};

export default Client;
