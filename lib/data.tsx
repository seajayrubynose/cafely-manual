import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");
const manualDirectory = path.join(contentDirectory, "manual");
const journalDirectory = path.join(contentDirectory, "journal");

export function getAllManualContent() {
  const allManualContent = fs.readdirSync(manualDirectory);

  return allManualContent.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const fileContents = fs.readFileSync(
      path.join(manualDirectory, fileName),
      "utf8"
    );
    const { data, content } = matter(fileContents);

    return {
      data,
      content,
      slug,
    };
  });
}

export function getAllManualLinks() {
  const allManualContent = getAllManualContent();

  const toReturn = allManualContent.map((item) => {
    return {
      title: item.data.title,
      slug: item.slug,
      order: item.data.order,
    };
  });

  return toReturn.sort((a, b) => (a.order > b.order ? 1 : -1));
}

export function getJournalContent() {
  const journalContent = fs.readdirSync(journalDirectory);

  console.log(journalContent);
}

// temporary:
export function getMainEntry() {
  const mainEntryContent = fs.readFileSync(
    path.join(journalDirectory, "MainEntry.md"),
    "utf8"
  );
  const slug = "MainEntry";
  const { data, content } = matter(mainEntryContent);

  return {
    data,
    content,
    slug,
  };
}
