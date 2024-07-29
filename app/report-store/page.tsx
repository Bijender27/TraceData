import ArticleSection from "./components/ArticleSection";
import BlogSection from "./components/BlogSection";
import CategorySection from "./components/CategorySection";
import StoreBanner from "./components/StoreBanner";
import WhitePaperSection from "./components/WhitePaperSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Report Store",
  description: "This page is for repots",
};
 

const page = () => {
  return (
    <div>
      <StoreBanner />
      <CategorySection/>
      <WhitePaperSection/>
      <ArticleSection/>
      <BlogSection/>
    </div>
  );
}

export default page