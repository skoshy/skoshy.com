import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';

export const dynamic = 'force-static'; // for static generation

async function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'src/app/blog');
  const files = fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.md'));

  const posts = await Promise.all(
    files.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      const processedContent = await remark().use(html).process(content);
      const contentHtml = processedContent.toString();
      return {
        title: data.title as string,
        date: data.date as string,
        contentHtml,
        slug: filename.replace(/\.md$/, ''),
      };
    })
  );

  // Sort by date descending
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main style={{ padding: '2rem', maxWidth: 700, margin: '0 auto' }}>
      <h1>Blog</h1>
      {posts.length === 0 && <p>No posts found.</p>}
      {posts.map((post) => (
        <article key={post.slug} style={{ marginBottom: '2rem' }}>
          <h2>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <p style={{ color: '#888', fontSize: '0.9em' }}>{post.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>
      ))}
    </main>
  );
} 
