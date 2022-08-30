import Link from '../Link/Link';

const Stand = () => {
  return (
    <section className="bg-white w-full">
      <div className="mx-auto max-w-screen-2xl sm:flex sm:flex-row sm:justify-between">
        <picture className="sm:w-2/4">
          <source
            srcSet="./images/desktop/image-stand-out.jpg"
            media="(min-width:640px)"
            className="w-full"
          />
          <img alt="glass" src="./images/mobile/image-stand-out.jpg" className="w-full" />
        </picture>
        <div className="px-5 sm:w-2/4 flex flex-col justify-center max-w-md mx-auto py-14 sm:py-0">
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, reseachers, photographers, videographers,
            and copywriters, we'll build and extend your brand in digital places.
          </p>
          <Link red={true} />
        </div>
      </div>
    </section>
  );
};

export default Stand;
