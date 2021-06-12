import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");
const manualDirectory = path.join(contentDirectory, "manual");

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
