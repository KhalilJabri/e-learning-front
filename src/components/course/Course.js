import React, { useState } from "react";
import "./Course.css";

const Course = () => {
  const [courseName, setCourseName] = useState("");
  const [playlists, setPlaylists] = useState([]);

  // Add a new playlist
  const addPlaylist = () => {
    const newPlaylist = {
      id: playlists.length + 1,
      name: `Playlist ${playlists.length + 1}`,
      available: true,
      videos: [],
    };
    setPlaylists([...playlists, newPlaylist]);
  };

  // Update the playlist name
  const updatePlaylistName = (playlistId, newName) => {
    setPlaylists((prevPlaylists) =>
      prevPlaylists.map((playlist) =>
        playlist.id === playlistId ? { ...playlist, name: newName } : playlist
      )
    );
  };

  // Upload videos to a playlist
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
      <h1>Course Management</h1>

      {/* Course Name */}
      <div className="course-name-section">
        <label>Course Name:</label>
        <input
          type="text"
          value={courseName}
          placeholder="Enter course name"
          onChange={(e) => setCourseName(e.target.value)}
        />
      </div>

      {/* Add Playlist */}
      <div className="add-playlist-section">
        <button onClick={addPlaylist} className="add-playlist-btn">
          Add Playlist
        </button>
      </div>

      {/* Playlists */}
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
              <span>{playlist.available ? "Available" : "Not Available"}</span>
            </div>
            <div className="upload-section">
              <label htmlFor={`upload-${playlist.id}`} className="upload-btn">
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
            {/* Videos List */}
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
  );
};

export default Course;
