import Head from "next/head";
import React from "react";
import SideNav from "../../components/SideNav";
import { useState } from "react";

import { getAllManualContent, getAllManualLinks } from "../../lib/data";
import { GetStaticProps, GetStaticPaths } from "next";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

// Icons
import { HiMenuAlt3 } from "react-icons/hi";

const ManualPage = (props: any) => {
  const [sideMenuIsVisible, setSideMenuIsVisible] = useState(true);

  return (
    <>
      <Head>
        <title>Cafe.ly | User Manual - {`${props.title}`}</title>
        <meta
          name="description"
          content="A cool user manual for a cool coffee review site!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Container COL for covering whole Height*/}
      <div className="relative flex flex-grow flex-col bg-gray-50">
        <div className="flex flex-grow flex-col h-full w-full max-w-5xl mx-auto">
          {/* Flex Container for 2 elements */}
          <div className="relative flex flex-grow">
            {/* 1st element SideNav */}
            {props.allManualContent && (
              <SideNav
                links={props.allManualContent}
                isActive={sideMenuIsVisible}
              />
            )}
            {/* 2nd element Content */}
            <div className="w-full px-8 lg:px-16 py-16">
              <div className="whitespace-pre-wrap prose md-image">
                <MDXRemote {...props.content} components={<h2>Hello!</h2>} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile SideNav Button */}
        <button
          onClick={() => setSideMenuIsVisible(!sideMenuIsVisible)}
          className="md:hidden fixed top-20 right-0 m-5 bg-primary rounded-full p-4 shadow-md"
        >
          <HiMenuAlt3 className="text-white" size="1.5em" />
        </button>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const allManualContent = getAllManualContent();

  const content = allManualContent.find((item) => item.slug === params?.slug);

  const mdxSource = await serialize(
    content?.content ? content?.content : "# test"
  );

  return {
    props: {
      ...content?.data,
      date: content?.data.date,
      content: mdxSource,
      allManualContent: getAllManualLinks(),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allManualContent = getAllManualContent();

  return {
    paths: getAllManualContent().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export default ManualPage;
