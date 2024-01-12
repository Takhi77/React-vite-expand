import { Banner } from "@features/art";
import { List } from "@features/art/list";
import { Carousel } from "@features/carousel";

export default function Art() {
  return (
    <>
      <Banner />
      <Carousel text="Unveiling the Kreation of the Kiki Koalas and our kreative kompass." />
      <List />
    </>
  );
}
