import axiosInstance from '@/lib/axios';
import BlogClient from './BlogClient';

export async function generateMetadata({ params }) {
  const { data: post } = await axiosInstance.get(`/posts/${params.slug}`);

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.ogTitle || post.title,
      description: post.ogDescription || post.excerpt,
      images: [post.ogImage || '/default-og.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.twitterTitle || post.title,
      description: post.twitterDescription || post.excerpt,
      images: [post.twitterImage || '/default-twitter.png'],
    },
  };
}

export default async function BlogPage({ params }) {
  const { data: post } = await axiosInstance.get(`/posts/${params.slug}`);
  return <BlogClient slug={params.slug} initialData={post} />;
}
