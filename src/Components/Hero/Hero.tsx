import s from './Hero.module.css';

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.bg}>
        <h1 className={s.title}>WE ARE CREATIVES</h1>
        <img alt="arrow" src="./images/icon-arrow-down.svg" className={s.arrow} />
      </div>
    </section>
  );
};

export default Hero;
