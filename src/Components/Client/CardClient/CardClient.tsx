import React from 'react';

export interface ICardClient {
  name: string;
  job: string;
  description: string;
  urlImg: string;
}

const CardClient: React.FC<ICardClient> = ({ name, job, description, urlImg }: ICardClient) => {
  return (
    <article className="flex flex-col items-center justify-center max-w-sm mx-auto">
      <img alt={name} src={urlImg} className="rounded-full w-14" />
      <p className="sm:text-center md:mt-14">{description}</p>
      <h3 className="mt-4 font-Fraunces text-lg md:mt-[70px]">{name}</h3>
      <p className="mt-2 lg:mt-3 opacity-40 text-xs lg:text-sm sm:text-center">{job}</p>
    </article>
  );
};

export default CardClient;
