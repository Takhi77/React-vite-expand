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
      <Library />
      <Team />
      <Ecosystem />
      <Support />
      <Connect />
    </>
  );
}
