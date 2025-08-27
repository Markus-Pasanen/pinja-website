"use client";

import { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/shared";
import { NewsArticle } from "@/types";

interface NewsSectionProps {
  articles: NewsArticle[];
}

const NewsSection = ({ articles }: NewsSectionProps) => {
  const [openArticle, setOpenArticle] = useState<NewsArticle | null>(null);

  return (
    <section>
      <h2 className="text-center">Ajankohtaista</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md bg-card overflow-hidden relative flex flex-col justify-between"
          >
            <div className="shadow-lg absolute left-0 top-0 rounded-br-lg py-2 px-4 bg-primary text-card z-10">
              {article.date}
            </div>
            <div>
              <Image
                src={article.thumbnail}
                alt={article.title}
                className="w-full h-48 object-cover brightness-75"
                width={500}
                height={500}
              />
              <div className="p-4 text-ellipsis overflow-hidden text-left">
                <h3>{article.title}</h3>
                <p className="line-clamp-2">
                  {article.excerpt}
                </p>
                <button
                  className="text-primary hover:underline mt-2 block p-0 bg-transparent border-none cursor-pointer"
                  onClick={() => setOpenArticle(article)}
                >
                  Lue lisää
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={!!openArticle} onClose={() => setOpenArticle(null)}>
        {openArticle && (
          <div className="flex flex-col h-full">
            <div className="w-full" style={{ height: "400px" }}>
              <Image
                src={openArticle.thumbnail}
                alt={openArticle.title}
                className="w-full h-full object-cover rounded-t-lg object-top"
                style={{ display: 'block', padding: 0, margin: 0 }}
                width={500}
                height={500}
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-2xl font-bold mb-2">{openArticle.title}</h2>
              <div className="text-sm text-muted-foreground mb-2">{openArticle.date}</div>
              <p>{openArticle.excerpt}</p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default NewsSection;