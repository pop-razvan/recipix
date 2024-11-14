// pages/recipes/[slug].tsx
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import RecipeLayout from '@/components/RecipeLayout';

type RecipeProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    title: string;
    image: string;
    description: string;
    ingredients: string[];
    instructions: string[];
  };
};

export default function RecipePage({ source, frontMatter }: RecipeProps) {
  return (
    <RecipeLayout
      title={frontMatter.title}
      image={frontMatter.image}
      description={frontMatter.description}
      ingredients={frontMatter.ingredients}
      instructions={frontMatter.instructions}
    >
      <MDXRemote {...source} />
    </RecipeLayout>
  );
}

export async function getStaticPaths() {
  const recipesDir = path.join(process.cwd(), 'src', 'content', 'recipes');
  const filenames = await fs.readdir(recipesDir);
  const paths = filenames.map((name) => ({
    params: { slug: name.replace('.mdx', '') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'src', 'content', 'recipes', `${params.slug}.mdx`);
  const fileContent = await fs.readFile(filePath, 'utf8');
  const { content, data } = matter(fileContent);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}
