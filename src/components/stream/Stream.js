import React from "react";
import "./Stream.css";
import Header from "../header/Header";

function Stream() {
  return (
    <>
    <Header />

    <div className="main-container">
      {/* Left Section: Video Player */}
      <div className="video-section">
        <video controls className="video-player">
          <source src="your-video-url.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="comments-section">
          <h3>Comments</h3>
          <textarea placeholder="Add a comment"></textarea>
          <button>Post</button>
          <div className="comments-list">
            <div className="comment">
              <p><strong>User1:</strong> This video is mind-blowing! Can't wait for more!</p>
            </div>
            <div className="comment">
              <p><strong>User2:</strong> Fantastic content! Very helpful for beginners.</p>
            </div>
            <div className="comment">
              <p><strong>User3:</strong> Amazing explanation, I learned a lot in just 10 minutes!</p>
            </div>
            <div className="comment">
              <p><strong>User4:</strong> Highly recommended! The video quality is excellent!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Playlist */}
      <div className="playlist-section">
        <h3>Course Content</h3>

        {/* Lesson 1 */}
        <div className="lesson-section">
          <h4>Lesson 1: Introduction</h4>
          <ul className="video-list">
            <li>
              <div className="video-item">
                <span>1. Introduction</span>
                <span>5 min</span>
              </div>
            </li>
            <li>
              <div className="video-item">
                <span>2. Foot Printing on Websites</span>
                <span>14 min</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Lesson 2 */}
        <div className="lesson-section">
          <h4>Lesson 2: Foot Printing</h4>
          <ul className="video-list">
            <li>
              <div className="video-item">
                <span>1. Foot Printing on People</span>
                <span>9 min</span>
              </div>
            </li>
            <li>
              <div className="video-item">
                <span>2. Foot Printing on Networks</span>
                <span>7 min</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Lesson 3 */}
        <div className="lesson-section">
          <h4>Lesson 3: Advanced Techniques</h4>
          <ul className="video-list">
            <li>
              <div className="video-item">
                <span>1. Advanced Reconnaissance</span>
                <span>12 min</span>
              </div>
            </li>
            <li>
              <div className="video-item">
                <span>2. Social Media Foot Printing</span>
                <span>15 min</span>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
    </>
  );
}

export default Stream;
