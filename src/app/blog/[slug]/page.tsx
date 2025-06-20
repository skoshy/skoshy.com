import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { notFound } from 'next/navigation';
import ClientBlogPostShell from './client-shell';

interface BlogPostProps {
  params: { slug: string };
}

export const dynamic = 'force-static';

async function getPost(slug: string) {
  const postPath = path.join(process.cwd(), 'src/app/blog', `${slug}.md`);
  if (!fs.existsSync(postPath)) return null;
  const fileContents = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return {
    title: data.title as string,
    date: data.date as string,
    contentHtml,
    slug,
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const post = await getPost(params.slug);
  if (!post) return notFound();

  return <ClientBlogPostShell post={post} />;
} 
