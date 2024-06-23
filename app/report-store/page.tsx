import ArticleSection from "./components/ArticleSection";
import CategorySection from "./components/CategorySection";
import StoreBanner from "./components/StoreBanner";
import WhitePaperSection from "./components/WhitePaperSection";
const page = () => {
  return (
    <div>
      <StoreBanner />
      <CategorySection/>
      <WhitePaperSection/>
      <ArticleSection/>
    </div>
  );
}

export default page