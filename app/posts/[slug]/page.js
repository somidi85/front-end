import PostContent from "../../../components/posts/post-detail/post-content";
import { getPostDataById } from "@/lib/posts-util";

const PostDetailPage = ({ params }) => {
  const { slug } = params;
  const postData = getPostDataById(slug);
  return <PostContent {...postData} />;
};

export default PostDetailPage;
