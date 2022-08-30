import Card from './Card/Card';

const Cards = () => {
  return (
    <section className="sm:flex sm:2xl:container mx-auto">
      <Card
        title="Graphic Design"
        description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."
        nameImg="./images/mobile/image-graphic-design.jpg"
        nameImgDesktop="./images/desktop/image-graphic-design.jpg"
      />
      <Card
        title="Photography"
        description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        nameImg="./images/mobile/image-photography.jpg"
        nameImgDesktop="./images/desktop/image-photography.jpg"
      />
    </section>
  );
};

export default Cards;
