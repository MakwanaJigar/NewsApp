import React from "react";

const NewsItems = (props) => {
  // destructuring...
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <>
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        ></div>
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "90%", zIndex: "1" }}
        >
          {source}
        </span>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-dark-emphasis">
              <b>
                {/* show the author or publish date  name is define.....or else by default author name is unknoown author!!  */}
                By {!author ? "Unknown Author" : author} on{" "}
                {new Date(date).toGMTString()}
              </b>
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-success"
          >
            Read More <i className="fa-solid fa-user-helmet-safety"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItems;
