import React from "react";
import BlogPageBox from "../components/BlogPageBox";

export default function BlogPage() {
  const blogData = {
    date: "September 23, 2024",
    author: "John Doe",
    title: "Amazing Blog Post",
    content:
      "This is an example blog post showing how reusable components work in React. You can pass different data to the BlogPage component.",
    categories: [
      { name: "React", color: "#6366F1" },
      { name: "JavaScript", color: "#22C55E" },
      { name: "Web Development", color: "#F59E0B" },
    ],
  };
  return (
    <div>
      <BlogPageBox {...blogData} />
    </div>
  );
}
