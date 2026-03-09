"use client";

import React from "react";
import Navbar from "@/components/home/Navbar/Navbar";
import ReadArticle from "@/components/learn/ReadArticle/ReadArticle";
import Footer from "@/components/home/Footer/Footer";

export default function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);

  return (
    <>
      <Navbar />
      <ReadArticle articleId={id} />
      <Footer />
    </>
  );
}
