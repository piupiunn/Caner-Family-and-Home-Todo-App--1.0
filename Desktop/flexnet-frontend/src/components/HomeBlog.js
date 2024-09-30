import React from "react";
import BlogBox from "./BlogBox";
import { Link } from "react-router-dom";

export default function HomeBlog() {
  return (
    <>
      <div className="container mx-auto px-6 py-10 home-blog">
        <BlogBox
          category="Travel"
          title="Exploring the Swiss Alps"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imgSrc="https://blocks.primereact.org/demo/images/blocks/blog/blog-1.jpg"
          authorImg="https://blocks.primereact.org/demo/images/blocks/avatars/circle/avatar-f-1.png"
          authorName="Marry Smith"
          date="Sep 12, 2024"
        />
        <BlogBox
          category="Travel"
          title="Exploring the Swiss Alps"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imgSrc="https://blocks.primereact.org/demo/images/blocks/blog/blog-1.jpg"
          authorImg="https://blocks.primereact.org/demo/images/blocks/avatars/circle/avatar-f-1.png"
          authorName="Marry Smith"
          date="Sep 12, 2024"
        />
        <BlogBox
          category="Travel"
          title="Exploring the Swiss Alps"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imgSrc="https://blocks.primereact.org/demo/images/blocks/blog/blog-1.jpg"
          authorImg="https://blocks.primereact.org/demo/images/blocks/avatars/circle/avatar-f-1.png"
          authorName="Marry Smith"
          date="Sep 12, 2024"
        />
      </div>
      <button className="blog-button shadow-lg">
        <Link to="blog-page">Read More</Link>
      </button>
    </>
  );
}
