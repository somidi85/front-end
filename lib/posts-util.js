import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

function getPostData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: fileName.replace(/\.md$/, ""),
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);

  // filter files that are not markdown files

  const allPosts = postFiles.map((postFile) => {
    if (!postFile.endsWith(".md")) {
      return;
    }
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
