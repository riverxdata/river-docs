import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import { BlogPostProvider } from "@docusaurus/plugin-content-blog/client";
import BlogPostItem from "@theme/BlogPostItem";
import BlogListPaginator from "@theme/BlogListPaginator";
import type { Props } from "@theme/BlogListPage";

export default function BlogListPage(props: Props) {
  const { metadata, items } = props;

  return (
    <Layout wrapperClassName="blog-wrapper">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--12">
            <div className="blog-grid-container">
              {items.map(({ content: BlogPostContent }) => {
                const description = BlogPostContent.metadata.description || "";
                const truncatedDescription =
                  description.split(" ").slice(0, 15).join(" ") +
                  (description.split(" ").length > 15 ? "..." : "");
                return (
                  <article
                    key={BlogPostContent.metadata.permalink}
                    className="card margin-bottom--lg"
                  >
                    {BlogPostContent.assets.image && (
                      <img
                        className="card__image"
                        src={BlogPostContent.assets.image}
                        // alt={BlogPostContent.metadata.title}
                      />
                    )}
                    <BlogPostProvider
                      content={BlogPostContent}
                      isBlogPostPage={false}
                    >
                      <BlogPostItem
                      // frontMatter={BlogPostContent.frontMatter}
                      // assets={BlogPostContent.assets}
                      // metadata={BlogPostContent.metadata}
                      >
                        <BlogPostContent />
                      </BlogPostItem>
                    </BlogPostProvider>
                  </article>
                );
              })}
            </div>
            <BlogListPaginator metadata={metadata} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
