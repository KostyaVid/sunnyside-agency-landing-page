interface ICardProps {
  title: string;
  description: string;
  nameImg: string;
  nameImgDesktop: string;
}

const Card = ({ title, description, nameImg, nameImgDesktop }: ICardProps) => {
  return (
    <article className="grid sm:w-2/4 sm:min-h-[450px]">
      <picture className="col-[1/2] row-[1/2] h-full">
        <source
          srcSet={nameImgDesktop}
          media="(min-width:640px)"
          className="w-full sm:w-auto lg:w-full lg:h-auto sm:h-full object-cover "
        />
        <img
          alt=" "
          src={nameImg}
          className="w-full lg:w-full lg:h-auto sm:w-auto sm:h-full object-cover"
        />
      </picture>
      <div className="col-[1/2] row-[1/2] flex flex-col justify-end mx-auto mb-12 px-5 sm:max-w-md">
        <h2 className="opacity-70 sm:text-center">{title}</h2>
        <p className="opacity-70 sm:text-center ">{description}</p>
      </div>
    </article>
  );
};

export default Card;
