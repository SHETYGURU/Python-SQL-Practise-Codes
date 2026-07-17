import React from "react";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data/blog";
import { BlogPostClient } from "./blog-post-client";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  return <BlogPostClient post={post} />;
}

// Generate Static Params for build-time rendering
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
