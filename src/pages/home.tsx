import { Carousel } from "@features/carousel";
import {
  Banner,
  Connect,
  Ecosystem,
  Learn,
  Support,
  Welcome,
} from "@features/landing";
import { Library } from "@features/landing/library";
import { Team } from "@features/landing/team";

export default function Home() {
  return (
    <>
      <Banner />
      <Welcome />
      <Learn />
      <Carousel text="Kiki, do you love me? Are you HUNGRY? Say you’ll never eveR EAT ME. " />
      <Library />
      <Team />
      <Carousel text="We hungry. We sleepy. Lofty gum tree tops are where your will find use. Either sleeping or eating." />
      <Ecosystem />
      <Support />
      <Connect />
    </>
  );
}
