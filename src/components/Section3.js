import React from "react";
import "../styles/section3.css";
import { allArticles } from "../articles/articles";

function Section3() {
  const allTheArticles = allArticles();

  return (
    <section className="section-3">
      <div className="sec-3-top-div">
        <div className="sec-3-spanned-text-1">LES</div>
        <div className="sec-3-spanned-text-2">ARTICLES</div>
      </div>
      
      <div className="sec-3-bottom-div">
        {allTheArticles.map((eachArticle) => (
          <div className="sec-3-articles-div">
            <h3>{eachArticle.title}</h3>
            <div className="date-and-category ">
              <span>{eachArticle.date}</span>
              <li className="list-disc">
                <span className=" underline cursor-pointer -ml-[8px] ">
                  {eachArticle.category}
                </span>
              </li>
            </div>
            <p className="text-xs">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
              quis quaerat quam ipsam corporis voluptatum dicta ex, eos minus{" "}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section3;
