import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import prisma from "@/libs/prisma";

export const metadata = getSEOTags({
  title: `Articles | ${config.appName}`,
  canonicalUrlRelative: "/articles",
});

const Articles = async () => {
  const articles = await prisma.article.findMany();
  return (
    <>
      <h1>Articles</h1>
    </>
  );
};

export default TOS;

