// pages/index.tsx
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Recipe = {
  slug: string;
  title: string;
};

export default function Home({ recipes }: { recipes: Recipe[] }) {
  return (
    <div>
      <h1>Recipe Collection</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.slug}>
            <Link href={`/recipix/recipes/${recipe.slug}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const recipesDir = path.join(process.cwd(), 'src', 'content', 'recipes');
  const filenames = await fs.promises.readdir(recipesDir);

  const recipes = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(recipesDir, filename);
      const fileContent = await fs.promises.readFile(filePath, 'utf8');
      const { data } = matter(fileContent);
      return {
        slug: filename.replace('.mdx', ''),
        title: data.title,
      };
    })
  );

  return {
    props: {
      recipes,
    },
  };
}
