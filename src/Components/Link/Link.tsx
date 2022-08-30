import React from 'react';

interface ILinkProps {
  red?: boolean;
}

const Link = ({ red = false }: ILinkProps) => {
  return (
    <a
      href="#"
      className={`font-Fraunces block mt-4 md:mt-8 w-32 md:w-40 md:text-xl sm:-ml-2 text-center font-extrabold mx-auto sm:mx-0 relative after:absolute after:w-full after:h-2 after:bottom-0 after:left-0 after:rounded-full transition-colors ${
        red
          ? 'after:bg-red-100  hover:after:bg-red-300'
          : 'after:bg-yellow-100  hover:after:bg-yellow-300'
      }`}>
      <span className="relative z-10">LEARN MORE</span>
    </a>
  );
};

export default Link;
