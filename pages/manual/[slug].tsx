import Head from "next/head";
import React from "react";
import SideNav from "../../components/SideNav";

import { getAllManualContent, getAllManualLinks } from "../../lib/data";
import { GetStaticProps, GetStaticPaths } from "next";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

const ManualPage = (props: any) => {
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

      <div className="flex flex-grow flex-col bg-gray-50">
        <div className="flex flex-grow flex-col h-full w-full max-w-5xl mx-auto">
          <div className="flex flex-grow">
            {props.allManualContent && (
              <SideNav links={props.allManualContent} />
            )}
            <div className="w-full p-5 pt-16">
              <div className="whitespace-pre prose">
                <MDXRemote {...props.content} components={<h2>Hello!</h2>} />
              </div>
            </div>
          </div>
        </div>
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
