import React from "react";
import { notFound } from "next/navigation";
import { products } from "@/lib/data/products";
import { ProductDetailsClient } from "./product-details-client";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return notFound();
  }

  return <ProductDetailsClient product={product} />;
}

// Generate Static Params for build-time rendering
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}
