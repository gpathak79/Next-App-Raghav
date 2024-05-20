// components/Card.tsx
import React from "react";
import Link from "next/link";

interface BlogPost {
    id: number;
  title: string;
  author: string;
  date_published: string;
  content: string;
}

interface CardProps {
  post: BlogPost;
}

const Card: React.FC<CardProps> = ({ post }) => {
  return (
    <div className="max-w-sm rounded ">
      <div className="px-6 py-4">
        <div className="font-bold">{post.title}</div>
        <p>
          {post.content.length > 20
            ? post.content.substring(0, 20) + "..."
            : post.content}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span >
          {post.author}
        </span>
        <span >
          {post.date_published}
        </span>
        <Link href={`/blog/${post.id}`}>
          <p className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mt-2">
            Read More
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
