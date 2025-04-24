import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import prisma from "@/libs/prisma";

export const metadata = getSEOTags({
  title: `Articles | ${config.appName}`,
  canonicalUrlRelative: "/articles",
});

const Articles = async () => {
  const articles = await prisma.articles.findMany();
  return (
    <>
      <h1>Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p>{article.category}</p>
            <p>{article.image}</p>
          </div>
        ))} 
      </div>
    </>
  );
};

export default Articles;

