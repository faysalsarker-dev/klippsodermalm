'use client';

import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default function BlogClient({ slug, initialData }) {
  const fetchPost = async () => {
    const { data } = await axiosInstance.get(`/posts/${slug}`);
    return data;
  };

  const { data: post } = useQuery(['blog', slug], fetchPost, {
    initialData,
    staleTime: 5 * 60 * 1000,
  });

  const editor = useEditor({
    editable: false,
    extensions: [StarterKit],
    content: post.content,
  });

  if (!editor) return null;

  return (
    <article className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.excerpt}</p>
      <div className="prose">
        <EditorContent editor={editor} />
      </div>
    </article>
  );
}
