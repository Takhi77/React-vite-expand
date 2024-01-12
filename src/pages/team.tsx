import { Carousel } from "@features/carousel";
import { Banner, Collective } from "@features/team";

export default function Team() {
  return (
    <>
      <Banner />
      <Carousel text="Kreativity. Kollaboration. Konnection. Kollectability. Kommunity. Konstruct. Kollective." />
      <Collective />
    </>
  );
}
