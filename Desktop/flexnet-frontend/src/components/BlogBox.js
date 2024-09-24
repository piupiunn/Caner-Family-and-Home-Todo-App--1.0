import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BlogBox({
  category,
  title,
  description,
  imgSrc,
  authorImg,
  authorName,
  date,
}) {
  return (
    <div className="blog-box-parent">
      <Link to="/blog-single">
        <div className="blog-box-container">
          <img className="blog-box-img" src={imgSrc} alt="Blog Post" />
          <div className="blog-box-bottom">
            <span className="blog-box-category">{category}</span>
            <div className="blog-box-title">{title}</div>
            <div className="blog-box-info">{description}</div>
            <div className="blog-box-author">
              <div className="blog-box-avatar">
                <img src={authorImg} alt="Author" />
              </div>
              <div className="blog-box-author-name-date">
                <div className="blog-box-author-name">{authorName}</div>
                <div className="blog-box-author-date">
                  <span className="blog-box-date-icon">
                    <FaCalendarAlt />
                  </span>
                  {date}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
