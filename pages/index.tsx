import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AnchorButton from "../components/AnchorButton";
import SideNav from "../components/SideNav";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cafe.ly | User Manual Home</title>
        <meta
          name="description"
          content="A cool user manual for a cool coffee review site!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="relative bg-primary flex flex-grow justify-center items-center"
        style={{
          backgroundImage: `url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F6NlmBQLhWy2QM%2Fsource.gif&f=1&nofb=1')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute flex flex-grow flex-col w-full h-full bg-white opacity-40"></div>
        <div className="relative max-w-5xl h-full mx-auto flex flex-col space-y-6 items-center text-gray-800 text-center py-20 px-10">
          <h1 className="font-extrabold text-7xl text-gray-900">
            Cafe.ly's User Manual
          </h1>
          <p>
            ☕ An <b>awesome guide</b> to the most awesome coffee review site in
            the planet
          </p>
          <div className="flex space-x-4 text-xl">
            <AnchorButton href="/manual">Manual</AnchorButton>
            <AnchorButton className="secondary-btn" href="/journal">
              Dev Journal
            </AnchorButton>
          </div>
        </div>
      </div>
    </>
  );
}
