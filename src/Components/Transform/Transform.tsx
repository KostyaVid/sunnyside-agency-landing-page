import Link from '../Link/Link';
import s from './Transform.module.css';

const Transform = () => {
  return (
    <section className={s.transform}>
      <div className={s.container}>
        <picture className="sm:w-2/4">
          <source
            srcSet="./images/desktop/image-transform.jpg"
            media="(min-width:640px)"
            className="w-full"
          />
          <img alt="egg" src="./images/mobile/image-transform.jpg" className="w-full" />
        </picture>
        <div className="px-5 sm:w-2/4 flex flex-col justify-center max-w-md mx-auto py-14 sm:py-0">
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands grow fast. Engage
            your clients through compelling visuals that do most of the marketing for you.
          </p>
          <Link />
        </div>
      </div>
    </section>
  );
};

export default Transform;
