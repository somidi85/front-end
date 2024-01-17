import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const DUMMY_POSTS = {
  title: "Getting Started With NextJS",
  image: "getting-started-nextjs.png",
  date: "2022-02-10",
  slug: "getting-started-nextjs",
  content: "# This is a first post\n## Some text",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
