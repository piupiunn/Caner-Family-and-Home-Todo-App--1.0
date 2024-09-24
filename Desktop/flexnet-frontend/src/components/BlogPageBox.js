import React from "react";

// CategoryBadge Component for reusability and dynamic styling
const CategoryBadge = ({ category, color }) => {
  const badgeStyle = {
    backgroundColor: color, // default color if none is provided
    padding: "5px 10px",
    borderRadius: "5px",
    marginRight: "10px",
    fontSize: "0.75rem",
    fontWeight: "700",
    color: "#fff",
  };

  return <div style={badgeStyle}>{category}</div>;
};

export default function BlogPage({
  date = "April 20, 2024", // default date
  author = "Marie Smith", // default author
  title = "Content Section Title", // default title
  content = "", // content passed as a string
  categories = [], // array of categories with color [{ name: 'New', color: '#ff5733' }]
}) {
  return (
    <div className="blog-page-parent">
      {/* Date and Author Section */}
      <div className="blog-page-date-author">
        <span>Published</span>
        <span className="blog-page-date"> {date}</span>
        <span> by</span>
        <span className="blog-page-author"> {author}</span>
      </div>

      {/* Title Section */}
      <div className="blog-page-title">{title}</div>

      {/* Blog Info / Intro Section */}
      <div className="blog-page-info">
        {content ||
          "Metus aliquam eleifend mi in nulla posuere. In vitae turpis massa sed elementum tempus egestas sed."}
      </div>

      {/* Category Badges */}
      <div className="blog-page-categories">
        {categories.map((category, index) => (
          <CategoryBadge
            key={index}
            category={category.name}
            color={category.color}
          />
        ))}
      </div>

      {/* Example Static Content */}
      <p>
        Nisi est sit amet facilisis. Ac odio tempor orci dapibus ultrices in
        iaculis nunc sed. Pellentesque pulvinar pellentesque habitant morbi
        tristique senectus. Nullam vehicula ipsum a arcu cursus vitae congue.
        Leo urna molestie at elementum eu facilisis. Nisi est sit amet
        facilisis. Ac odio tempor orci dapibus ultrices in iaculis nunc sed.
        Pellentesque pulvinar pellentesque habitant morbi tristique senectus.
        Nullam vehicula ipsum a arcu cursus vitae congue. Leo urna molestie at
        elementum eu facilisis. Nisi est sit amet facilisis. Ac odio tempor orci
        dapibus ultrices in iaculis nunc sed. Pellentesque pulvinar pellentesque
        habitant morbi tristique senectus. Nullam vehicula ipsum a arcu cursus
        vitae congue. Leo urna molestie at elementum eu facilisis.
      </p>
      <blockquote>
        “In short, GPU.js is a JavaScript acceleration library that can be used
        for general-purpose computations on GPUs using JavaScript. It supports
        browsers, Node.js and TypeScript.”
      </blockquote>
      <p>
        Convallis tellus id interdum velit laoreet id donec ultrices. Lacus sed
        viverra tellus in hac habitasse platea dictumst. Ultricies tristique
        nulla aliquet enim. Convallis tellus id interdum velit laoreet id donec
        ultrices. Lacus sed viverra tellus in hac habitasse platea dictumst.
        Ultricies tristique nulla aliquet enim. Convallis tellus id interdum
        velit laoreet id donec ultrices. Lacus sed viverra tellus in hac
        habitasse platea dictumst. Ultricies tristique nulla aliquet enim.
      </p>

      {/* Example Image */}
      <div className="blog-page-img">
        <img
          src="https://blocks.primereact.org/demo/images/blocks/content/content-1.jpg"
          alt="blog-img"
        />
      </div>

      {/* Another Example Section */}
      <h2>Massa vitae tortor condimentum lacinia</h2>
      <p>
        Lacus viverra vitae congue eu consequat ac felis donec et. A lacus
        vestibulum sed arcu non. Lacus viverra vitae congue eu consequat ac
        felis donec et. A lacus vestibulum sed arcu non. Lacus viverra vitae
        congue eu consequat ac felis donec et. A lacus vestibulum sed arcu non.
      </p>
    </div>
  );
}
