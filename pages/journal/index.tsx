import { GetStaticProps } from "next";
import { getJournalContent, getMainEntry } from "../../lib/data";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";

const Journal = ({ content }: any) => {
  return (
    <>
      <Head>
        <title>Cafe.ly | Dev Journal - Main Entry</title>
        <meta name="description" content="Cafe.ly Developer Journal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-grow flex-col h-full w-full max-w-5xl mx-auto">
        <div className="w-full px-8 lg:px-16 py-16">
          <div className="whitespace-pre-wrap prose">
            <MDXRemote {...content} components={<i>MDX Remote</i>} />
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = getMainEntry();

  const mdxSource = await serialize(
    content.content ? content?.content : "# test"
  );

  return {
    props: {
      content: mdxSource,
    },
  };
};

export default Journal;
