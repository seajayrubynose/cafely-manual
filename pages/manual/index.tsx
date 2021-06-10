import Head from "next/head";
import Image from "next/image";
import SideNav from "../../components/SideNav";
import styles from "../styles/Home.module.css";

export default function Manual() {
  return (
    <>
      <Head>
        <title>Cafe.ly | User Manual</title>
        <meta
          name="description"
          content="A cool user manual for a cool coffee review site!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-grow flex-col bg-gray-50">
        <div className="flex flex-grow flex-col h-full w-full max-w-5xl mx-auto">
          <div className="flex flex-grow">
            <SideNav />
            <div className="w-full p-5 pt-16">
              <h1>Getting Started</h1>
              <p>Nice nice nice very nice</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
