import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";
import { getFeaturedPosts } from "@/lib/posts-util";

function HomePage() {
  const featuredPosts = getFeaturedPosts();

  return (
    <div>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </div>
  );
}

export default HomePage;
