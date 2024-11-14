// components/RecipeLayout.tsx
import { ReactNode } from 'react';
import Image from '@/components/Image'

type RecipeLayoutProps = {
  title: string;
  image: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  children: ReactNode;
};

export default function RecipeLayout({
  title,
  image,
  description,
  ingredients,
  instructions,
  children,
}: RecipeLayoutProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>

      <Image src={image} />

      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <ol>
        {instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <div>{children}</div>
    </div>
  );
}
