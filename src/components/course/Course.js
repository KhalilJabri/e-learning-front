import React, { useState } from "react";
import "./Course.css";

const Course = () => {
  const [courseName, setCourseName] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [viewAllCourses, setViewAllCourses] = useState(false);
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "React Basics",
      image: "https://images.unsplash.com/photo-1530631673369-bc20fdb32288?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      totalVideos: 8,
    },
    {
      id: 2,
      name: "Advanced JavaScript",
      image: "https://plus.unsplash.com/premium_photo-1683121825174-ff1620a5e387?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BsYXNofGVufDB8fDB8fHww",
      totalVideos: 12,
    },
    {
      id: 3,
      name: "CSS Mastery",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      totalVideos: 5,
    },
    {
      id: 4,
      name: "CSS Mastery",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      totalVideos: 5,
    }
  ]);


  const addPlaylist = () => {
    const newPlaylist = {
      id: playlists.length + 1,
      name: `Playlist ${playlists.length + 1}`,
      available: true,
      videos: [],
    };
    setPlaylists([...playlists, newPlaylist]);
  };

  const saveCourse = () => {
    if (!courseName.trim()) {
      alert("Course name is required!");
      return;
    }
    const totalVideos = playlists.reduce(
      (acc, playlist) => acc + playlist.videos.length,
      0
    );
    const newCourse = {
      id: courses.length + 1,
      name: courseName,
      image: "https://via.placeholder.com/150", // Default course image
      totalVideos,
    };
    setCourses([...courses, newCourse]);
    setCourseName("");
    setPlaylists([]);
  };

  const updatePlaylistName = (playlistId, newName) => {
    setPlaylists((prevPlaylists) =>
      prevPlaylists.map((playlist) =>
        playlist.id === playlistId ? { ...playlist, name: newName } : playlist
      )
    );
  };

  const uploadVideo = (playlistId, files) => {
    if (files.length === 0) return;
    const uploadedVideos = Array.from(files).map((file) => file.name);
    setPlaylists((prevPlaylists) =>
      prevPlaylists.map((playlist) =>
        playlist.id === playlistId
          ? { ...playlist, videos: [...playlist.videos, ...uploadedVideos] }
          : playlist
      )
    );
  };

  return (
    <div className="course-container">
      <div className="top-buttons">
        <button
          onClick={() => setViewAllCourses(true)}
          className="view-all-btn"
        >
          View All Courses
        </button>
        <button
          onClick={() => setViewAllCourses(false)}
          className="manage-course-btn"
        >
          Manage Current Course
        </button>
      </div>

      {viewAllCourses ? (
        <div className="all-courses-section">
          <h2>All Courses</h2>
          <div className="course-cards">
            {courses.length > 0 ? (
              courses.map((course) => (
                <div key={course.id} className="course-card">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="course-image"
                  />
                  <h3>{course.name}</h3>
                  <p>{course.totalVideos} videos</p>
                  <div className="course-card-footer">
                    <span>View Details</span>
                    <button>Enroll</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No courses available. Create one in the "Manage Current Course" section.</p>
            )}
          </div>
        </div>

      ) : (
        <div className="manage-course-section">
          <h1>Course Management</h1>

          <div className="course-name-section">
            <label>Course Name:</label>
            <input
              type="text"
              value={courseName}
              placeholder="Enter course name"
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>

          <div className="add-playlist-section">
            <button onClick={addPlaylist} className="add-playlist-btn">
              Add Playlist
            </button>
            <button onClick={saveCourse} className="save-course-btn">
              Save Course
            </button>
          </div>

          <div className="playlists-container">
            {playlists.map((playlist) => (
              <div key={playlist.id} className="playlist-card">
                <div className="playlist-header">
                  <input
                    type="text"
                    value={playlist.name}
                    onChange={(e) =>
                      updatePlaylistName(playlist.id, e.target.value)
                    }
                    className="playlist-name-input"
                  />
                  <span>
                    {playlist.available ? "Available" : "Not Available"}
                  </span>
                </div>
                <div className="upload-section">
                  <label
                    htmlFor={`upload-${playlist.id}`}
                    className="upload-btn"
                  >
                    Upload Videos
                  </label>
                  <input
                    type="file"
                    id={`upload-${playlist.id}`}
                    accept="video/*"
                    multiple
                    onChange={(e) => uploadVideo(playlist.id, e.target.files)}
                    style={{ display: "none" }}
                  />
                </div>
                {playlist.videos.length > 0 && (
                  <ul className="video-list">
                    {playlist.videos.map((video, index) => (
                      <li key={index}>{video}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Course;
