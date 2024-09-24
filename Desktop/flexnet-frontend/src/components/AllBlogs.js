import React from "react";
import BlogBox from "./BlogBox";
import { MdOutlineTrendingUp } from "react-icons/md";

export default function AllBlogs() {
  return (
    <div>
      <h1 className="all-blog-page-title section-titles">Our Blog</h1>

      <div className="blog-bar blog-bar-container  mx-auto  px-6  py-2  ">
        <MdOutlineTrendingUp /> <h1>What's Trending</h1>
      </div>

      <div className="container mx-auto py-10 home-blog">
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

      <div className="blog-bar blog-bar-container  mx-auto  px-6  py-2  ">
        <MdOutlineTrendingUp /> <h1>Latest</h1>
      </div>

      <div className="container mx-auto py-10 home-blog">
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
    </div>
  );
}
