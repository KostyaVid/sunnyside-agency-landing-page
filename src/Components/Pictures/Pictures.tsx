import React from 'react';

const Pictures = () => {
  return (
    <aside className="2xl:container mx-auto flex flex-wrap">
      <picture className="w-2/4 sm:w-1/4 h-[50vw] sm:h-auto">
        <source
          srcSet="./images/desktop/image-gallery-milkbottles.jpg"
          media="(min-width:640px)"
          className="h-full"
        />
        <img alt="milk" src="./images/mobile/image-gallery-milkbottles.jpg" className="h-full" />
      </picture>
      <picture className="w-2/4 sm:w-1/4 h-[50vw] sm:h-auto">
        <source
          srcSet="./images/desktop/image-gallery-orange.jpg"
          media="(min-width:640px)"
          className="h-full"
        />
        <img alt="orange" src="./images/mobile/image-gallery-orange.jpg" className="h-full" />
      </picture>
      <picture className="w-2/4 sm:w-1/4 h-[50vw] sm:h-auto">
        <source
          srcSet="./images/desktop/image-gallery-cone.jpg"
          media="(min-width:640px)"
          className="h-full"
        />
        <img alt="cone" src="./images/mobile/image-gallery-cone.jpg" className="h-full" />
      </picture>
      <picture className="w-2/4 sm:w-1/4 h-[50vw] sm:h-auto">
        <source
          srcSet="./images/desktop/image-gallery-sugarCubes.jpg"
          media="(min-width:640px)"
          className="h-full"
        />
        <img
          alt="sugar cubes"
          src="./images/mobile/image-gallery-sugar-cubes.jpg"
          className="h-full"
        />
      </picture>
    </aside>
  );
};

export default Pictures;
