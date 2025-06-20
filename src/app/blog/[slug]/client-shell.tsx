"use client";
import ScrollProgressBar from "./scroll-progress-bar";

interface ClientBlogPostShellProps {
  post: {
    title: string;
    date: string;
    contentHtml: string;
    slug: string;
  };
}

export default function ClientBlogPostShell({ post }: ClientBlogPostShellProps) {
  return (
    <>
      <ScrollProgressBar />
      <main style={{ padding: '2rem', maxWidth: 700, margin: '0 auto' }}>
        <h1>{post.title}</h1>
        <p style={{ color: '#888', fontSize: '0.9em' }}>{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </main>
    </>
  );
} 
