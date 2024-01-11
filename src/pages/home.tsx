import { Banner, Ecosystem, Learn, Welcome } from "@features/landing";
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
    </>
  );
}
