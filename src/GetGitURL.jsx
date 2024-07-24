import React, { useState } from 'react';
import './GetGit.css'; // Import CSS file for styling

const GetGitURL = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const fetchUserData = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        setUserData(data);
      })
      .catch(error => {
        console.error('Error fetching data from GitHub API:', error);
      });
  };

  return (
    <div className="github-user-fetcher">
      <input
        type="text"
        placeholder="Enter GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="username-input"
      />
      <button onClick={fetchUserData} className="fetch-button">Show</button>

      {userData && (
        <div className="user-data">
          <p>ID: {userData.id}</p>
          <img src={userData.avatar_url} alt="Avatar" className="avatar" />
        </div>
      )}
    </div>
  );
};

export default GetGitURL;
