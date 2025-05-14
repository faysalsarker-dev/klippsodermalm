'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const BlogContent = ({ content }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    editable: false,
  });

  return <EditorContent editor={editor} className="prose lg:prose-xl max-w-full" />;
};

export default BlogContent;
