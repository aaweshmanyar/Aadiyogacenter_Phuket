import React from "react";
import img from "../../assets/img/Pilates/pilates2.jpg";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import './promotion.css';
import image from '../../assets/img/courses/yogaclass.jpg';

const Promotions = () => {
  

  return (
    

    <>
      <div className="page-wrap mb-5">
        {/* Section to hold post sliders */}
        <section className="post-sliders">
          {/* Heading for the section */}
          <h2 className="section-heading">Promotions</h2>
          {/* Main post slider container */}
          <div className="post-slider bg-gradient-to-r from-green to-white rounded-md ">
            {/* Header card (title and sponsor information) */}
            <div className="post-slider-header header-card bg-cover bg-no-repeat" style={{backgroundImage: `url(${image})`}}>
              <h2 className="header-card-title bg-white text-green">Classic Tricks</h2>
              <p className="header-card-sponsor bg-white text-green">Timeless CSS gems</p>
            </div>
            {/* Grid layout for mini cards (articles) */}
            <div className="mini-card-grid ">
              {/* First mini card */}
              {/* bg-gradient-to-r from-green-300 to-green-300 */}
              <article className="mini-card  bg-white">
                <time>
                  <strong>Article</strong> on Oct 6, 2021
                </time>

                <h3 className="mini-card-title">Advanced CSS Flexbox</h3>

                {/* Short description of the article */}
                <div className="mini-card-description text-green">
                  Master flexbox with advanced techniques and layouts for
                  responsive web design.
                </div>

                {/* Author information for the article */}
                <div className="author-row">
                  {/* Author avatar */}
                  <div>
                    <img
                      alt=""
                      src="https://avatar.iran.liara.run/public/14"
                      className="avatar"
                    />
                  </div>
                  {/* Link to author profile */}
                  <a className="author-name " href="#" style={{color: "black"}}>
                    Sam Winters
                  </a>
                </div>
              </article>

              {/* Second mini card */}
              <article className="mini-card  bg-white">
                <time>
                  <strong>Article</strong> on Oct 6, 2021
                </time>

                <h3 className="mini-card-title">Advanced CSS Flexbox</h3>

                {/* Short description of the article */}
                <div className="mini-card-description text-green">
                  Master flexbox with advanced techniques and layouts for
                  responsive web design.
                </div>

                {/* Author information for the article */}
                <div className="author-row">
                  {/* Author avatar */}
                  <div>
                    <img
                      alt=""
                      src="https://avatar.iran.liara.run/public/14"
                      className="avatar"
                    />
                  </div>
                  {/* Link to author profile */}
                  <a className="author-name " href="#" style={{color: "black"}}>
                    Sam Winters
                  </a>
                </div>
              </article>

              {/* Third mini card */}
              <article className="mini-card  bg-white">
                <time>
                  <strong>Article</strong> on Oct 6, 2021
                </time>

                <h3 className="mini-card-title">Advanced CSS Flexbox</h3>

                {/* Short description of the article */}
                <div className="mini-card-description text-green">
                  Master flexbox with advanced techniques and layouts for
                  responsive web design.
                </div>

                {/* Author information for the article */}
                <div className="author-row">
                  {/* Author avatar */}
                  <div>
                    <img
                      alt=""
                      src="https://avatar.iran.liara.run/public/14"
                      className="avatar"
                    />
                  </div>
                  {/* Link to author profile */}
                  <a className="author-name " href="#" style={{color: "black"}}>
                    Sam Winters
                  </a>
                </div>
              </article>

              {/* Fourth mini card */}
              <article className="mini-card  bg-white">
                <time>
                  <strong>Article</strong> on Oct 6, 2021
                </time>

                <h3 className="mini-card-title">Advanced CSS Flexbox</h3>

                {/* Short description of the article */}
                <div className="mini-card-description text-green">
                  Master flexbox with advanced techniques and layouts for
                  responsive web design.
                </div>

                {/* Author information for the article */}
                <div className="author-row">
                  {/* Author avatar */}
                  <div>
                    <img
                      alt=""
                      src="https://avatar.iran.liara.run/public/14"
                      className="avatar"
                    />
                  </div>
                  {/* Link to author profile */}
                  <a className="author-name " href="#" style={{color: "black"}}>
                    Sam Winters
                  </a>
                </div>
              </article>

              {/* Fifth mini card */}
              <article className="mini-card bg-white">
                <time>
                  <strong>Article</strong> on Jan 5, 2022
                </time>

                <h3 className="mini-card-title">
                  Responsive Web Design Basics
                </h3>

                <div className="mini-card-description">
                  An introduction to responsive design, with media queries and
                  fluid layouts.
                </div>

                <div className="author-row">
                  <div>
                    <img
                      alt=""
                      src="https://avatar.iran.liara.run/public/18"
                      className="avatar"
                    />
                  </div>
                  <a className="author-name" href="#">
                    Emily Rogers
                  </a>
                </div>
              </article>

              {/* Sixth mini card */}
              <article className="mini-card bg-white">
                <time>
                  <strong>Article</strong> on Feb 22, 2022
                </time>

                <h3 className="mini-card-title">Advanced Selectors in CSS</h3>

                <div className="mini-card-description">
                  Discover powerful CSS selectors and how to use them in your
                  stylesheets.
                </div>

                <div className="author-row">
                  <div>
                    <img
                      alt=""
                      src="https://avatar.iran.liara.run/public/14"
                      className="avatar"
                    />
                  </div>
                  <a className="author-name" href="#">
                    James Foster
                  </a>
                </div>
              </article>
            </div>{" "}
            {/* End of mini-card grid */}
          </div>{" "}
          {/* End of post-slider */}
        </section>{" "}
        {/* End of post-sliders section */}
      </div>{" "}
      {/* End of page-wrap */}
    </>
  );
};

export default Promotions;
