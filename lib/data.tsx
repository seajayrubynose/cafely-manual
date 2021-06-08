import fs from "fs";
import path from "path";

const contentDirectory = path.join(process.cwd(), "content");

export function getAllContent() {
  const allContent = fs.readdirSync(contentDirectory);

  console.log(allContent);
}
