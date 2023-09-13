import React from 'react';

const StudentInfo = () => {
  const yourName = 'Jinki Lee'; // Replace with your actual name
  const courseSection = 'CPRG 306 F'; // Replace with your course section
  const githubRepoUrl = 'https://github.com/jinki-lee'; // Replace with your GitHub repository URL

  return (
    <div>
      <h2>Your Name: {yourName}</h2>
      <p>Course Section: {courseSection}</p>
      <p>
        GitHub Repository:{' '}
        <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer">
          {githubRepoUrl}
        </a>
      </p>
    </div>
  );
};

export default StudentInfo;
