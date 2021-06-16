import Head from "next/head";
import Image from "next/image";
import SideNav from "../../components/SideNav";
import styles from "../styles/Home.module.css";
import { GetStaticProps } from "next";
import { getAllManualContent, getAllManualLinks } from "../../lib/data";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

export default function Manual(props: any) {
  const router = useRouter();
  useEffect(() => {
    router.push("/manual/GettingStarted", undefined, { shallow: true });
  }, []);
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
            {props.allManualContent && (
              <SideNav links={props.allManualContent} />
            )}
            <div className="w-full p-5 pt-16">
              <h1>Manual Page Index.tsx</h1>
              <p>Nice nice nice very nice</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allManualContent = getAllManualContent();
  return {
    props: {
      allManualContent: getAllManualLinks(),
    },
  };
};
