import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    title: "Getting Started With NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
    slug: "getting-started-nextjs",
  },
  {
    title: "New React Course Available",
    image: "react-course.png",
    excerpt:
      "My new course, React - The Complete Guide, is available now for just $12.99!.",
    date: "2022-01-01",
    slug: "react-course",
  },
];

function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </div>
  );
}

export default HomePage;