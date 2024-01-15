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
// import { useEffect, useState } from "react";

// const fetchApiData = () => {
//   console.log("this----------------");
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data loaded!");
//     }, 2000); // Simulating a 2-second delay for data fetching
//   });
// };

export default function Home() {
  // const [data, setData] = useState<number>(0);
  // useEffect(() => {
  //   // Your asynchronous operation that returns a Promise
  //   const fetchData = async () => {
  //     await fetchApiData();
  //     setData(1);
  //   };

  //   fetchData();
  // }, []);

  // if (data === 0) {
  //   return <></>;
  // }

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
